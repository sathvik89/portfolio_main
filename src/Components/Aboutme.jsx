import styles from "../Styling/About.module.css";
export default function Aboutme() {
  return (
    <div className={styles.aboutcontainer}>
      <div className={styles.about}>About me</div>
      <div className={styles.info}>
        <p>
          Hi, I'm Sathvik! a first-year Computer Science student at Newton
          School of Technology, Rhilood University, Sonipat. I love coding ,
          problem solving , exploring new technologies and just do something on
          laptops/screens. Over time, I've expertise in Python, HTML, CSS,
          JavaScript, and React library. Learning Data structures and algorithms
          . And I enjoy building projects that bring ideas to life. So far, I've
          completed quite a few projects that showcase my skills in web
          development and programming. I also love solving problems on platforms
          like LeetCode (210+ problems solved) and Codeforces (757+ rating)
          Academically, I've been doing well too, with an SGPA of 8.696 in my
          first semester . When I'm not coding or studying, you'll probably find
          me on the court—playing badminton, cricket, or lawn tennis . Sports
          keep me energized and active . As a part of Neutron 2.O i've also
          gained communication skills , teamworking skills , time management ,
          managing deadlines etc . I always try to give my best and learn along
          the way. I'm excited to keep growing as a developer and see where this
          journey takes me!
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
