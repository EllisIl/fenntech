import Image from "next/image";

export default function About() {
    return(
        <main>
      <p>
        I&#39;m pretty cool 😎
      </p>

      <div>
        <Image src="/images/cat.gif" alt="FennTech Logo" width="300" height="300" />
      </div>
    </main>
    )
}