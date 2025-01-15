export default function GrainBackground() {
  return (
    <div className="w-full h-screen fixed top-0 z-[100] mix-blend-screen  pointer-events-none">
      <video
        className="w-full top-0 h-full object-cover pointer-events-none opacity-80 sm:opacity-50 "
        muted
        playsInline
        loop
        autoPlay
        src="/grain.webm"
      ></video>
    </div>
  );
}
