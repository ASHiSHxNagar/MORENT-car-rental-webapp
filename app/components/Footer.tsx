export default function Footer() {
  return (
    <footer className="p-4 bg-white shadow mt-4">
      <div className="grid grid-cols-4 gap-4">
        <div>
          <h2 className="text-xl font-bold text-blue-900">MORENT</h2>
          <p className="text-gray-500">Our vision is to provide convenience.</p>
        </div>
        <div>
          <h3 className="font-bold">About</h3>
          <ul className="text-gray-500">
            <li>How it works</li>
            <li>Featured</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Community</h3>
          <ul className="text-gray-500">
            <li>Events</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Socials</h3>
          <ul className="text-gray-500">
            <li>Twitter</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>
      <p className="mt-4 text-center text-gray-500">
        ©2023 MORENT. All rights reserved.
      </p>
    </footer>
  );
}
