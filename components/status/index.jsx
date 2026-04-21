import config from "../../config/endpoints.json";
import styles from "./index.module.css";

async function checkEndpoint(url) {
  try {
    const res = await fetch(url, { cache: "no-store" });
    return res.ok;
  } catch {
    return false;
  }
}

export default async function StatusPage() {
  const results = await Promise.all(
    config.endpoints.map(async (ep) => ({
      ...ep,
      operational: await checkEndpoint(ep.url),
    })),
  );

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>{config.title} System Status</h1>
      <div className={styles.list}>
        {results.map((ep) => (
          <div key={ep.name} className={styles.item}>
            <span className={styles.name}>{ep.name}</span>
            <div className={styles.status}>
              <span
                className={`${styles.dot} ${
                  ep.operational ? styles.operational : styles.error
                }`}
              />
              <span>{ep.operational ? "Operational" : "Down"}</span>
            </div>
          </div>
        ))}
      </div>
      <footer className={styles.footer}>
        Powered by{" "}
        <a
          href="https://github.com/bereilhp/uply"
          target="_blank"
          rel="noopener noreferrer"
        >
          uply
        </a>
      </footer>
    </main>
  );
}
