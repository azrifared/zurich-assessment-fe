import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import { SessProvider } from "./SessionProvider";
import AuthGuard from "./components/AuthWrapper";
import "./styles/globals.css";
import styles from "./styles/layout.module.css";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
      <StoreProvider>
        <html lang="en">
          <body>
            <section className={styles.container}>
              <header className={styles.header}>
              </header>
              <SessProvider>
                <AuthGuard>
                  <main className={styles.main}>{children}</main>
                </AuthGuard>
              </SessProvider>
            </section>
          </body>
        </html>
      </StoreProvider>
  );
}
