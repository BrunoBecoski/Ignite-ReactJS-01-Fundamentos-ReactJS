import { ThumbsUp, Trash } from 'phosphor-react';

import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/brunobecoski.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Bruno Becoski</strong>
              <time title="9 de Julho às 22:31h" dateTime="2022-06-09 22:31:30">Cerca de 2h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Diego, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} weight="bold" />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}