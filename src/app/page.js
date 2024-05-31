import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className="intro">
          <h1>Hyungjun Han</h1>
          <h2>Cloud security expert</h2>
          <p>안녕하세요.<br></br>
            클라우드 보안 전문가 한형준입니다.</p>
          <div>
            <button>View Portfolio</button>
            <button>AI Resume</button>
          </div>
      </section>
    </>
  );
}
