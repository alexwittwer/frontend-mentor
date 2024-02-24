import qr from "./images/image-qr-code.png"
import "./QR.css"

export default function QR() {
  return (
    <main className="container">
      <div className="card">
        <img src={qr} alt="" className="img" />
        <p className="text-main">Improve your front-end skills by building projects</p>
        <p className="text-secondary">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level.
        </p>
      </div>
    </main>
  );
}
