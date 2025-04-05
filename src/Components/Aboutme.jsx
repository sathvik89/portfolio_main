import styles from "../Styling/About.module.css";
export default function Aboutme() {
  return (
    <div className={styles.aboutcontainer}>
      <div className={styles.about}>About me</div>
      <div className={styles.info}>
        <p>
          Hi, I'm Sathvik! I'm a first-year Computer Science student at Newton
          School of Technology, Rhilood University, Hyderabad. I'm super
          passionate about coding and problem-solving, and I love exploring new
          technologies.
        </p>
        <br />
        <p>
          Over time, I've gained hands-on experience with Python, HTML, CSS,
          JavaScript, and React , and I enjoy building projects that bring ideas
          to life. So far, I've completed 3-4 mini-projects that showcase my
          skills in web development and programming. I also love solving
          problems on platforms like LeetCode (210+ problems solved) and
          Codeforces (757+ rating)
        </p>
        <br />
        <p>
          Academically, I've been doing well too, with an SGPA of 8.696 in my
          first semester . But beyond academics, I believe in learning by doing
          and staying curious about how things work.
        </p>
        <br />
        <p>
          When I'm not coding or studying, you'll probably find me on the
          court—playing badminton, cricket, or lawn tennis . Sports keep me
          energized and teach me the value of teamwork and perseverance.
          Speaking of teamwork, I recently helped organize Neutron Fest 2.0 at
          our college. It was such a rewarding experience, and it really
          highlighted my ability to manage tasks, collaborate with others, and
          meet deadlines.
        </p>
        <br />
        <p>
          I'm all about time management and balancing my interests. Whether it's
          coding, organizing events, or playing sports, I always try to give my
          best and learn along the way. I'm excited to keep growing as a
          developer and see where this journey takes me!
        </p>
      </div>
      <div className={styles.Socialmedia}>
        <div className={styles.github}>
          <a href="https://github.com/sathvik89">Github</a>
        </div>
        <div className={styles.linkedin}>
          <a href="https://www.linkedin.com/in/sathvik-koriginja-846b1631a/">
            Linkedin
          </a>
        </div>
        <div className={styles.gmail}>
          <a href="mailto:koriginjasathvik@gmail.com">Gmail</a>
        </div>
        <div className={styles.insta}>
          <a href="https://www.instagram.com/_sathvik_128/">Instagram</a>
        </div>
      </div>
    </div>
  );
}
