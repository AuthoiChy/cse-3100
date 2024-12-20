import { useEffect, useState } from 'react';

const highlightedCats = [
  { name: 'Luna', age: '3', type: 'Sphynx' },
  { name: 'Bella', age: '2', type: 'Persian' },
  { name: 'Leo', age: '1', type: 'Abyssinian' },
];

export default function Homepage() {
  const [catProfiles, setCatProfiles] = useState([]);

  useEffect(() => {
    // Fetch random images for the highlighted cat profiles
    const loadCatImages = async () => {
      try {
        const imageResults = await Promise.all(
          highlightedCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())
          )
        );

        const profilesWithImages = highlightedCats.map((cat, idx) => ({
          ...cat,
          photo: imageResults[idx][0].url,
        }));

        setCatProfiles(profilesWithImages);
      } catch (err) {
        console.error('Failed to fetch cat images:', err);
      }
    };

    loadCatImages();
  }, []);

  return (
    <>
      <section className="intro-section text-center mt-4">
        <h2>Discover Your Purrfect Companion</h2>
        <p>
          Explore our adorable selection of cats looking for loving homes. Each one has a unique personality and story waiting to be shared.
        </p>
      </section>

      <section className="featured-section mt-5">
        <h2>Meet Our Stars</h2>
        <div className="row g-4 mt-2" id="featured-cats-container">
          {catProfiles.map((profile, idx) => (
            <div key={idx} className="col-md-4">
              <div className="profile-card">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="img-fluid mb-2"
                  style={{ borderRadius: '10px', height: '200px', objectFit: 'cover' }}
                />
                <div className="profile-details">
                  <h3 className="h5 mb-1">{profile.name}</h3>
                  <p className="mb-0">Age: {profile.age}</p>
                  <p className="mb-0">Type: {profile.type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
