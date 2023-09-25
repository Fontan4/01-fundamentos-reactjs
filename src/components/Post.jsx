import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

export function Post ({ author, publishedAt, content }) {

    const [comment, setComments] = useState([
        'Post muito bacana, viu?'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    function handleCreateComment() {
        event.preventDefault()

        setComments([...comment, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange() {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value);
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comment.filter(comment => {
            return comment !== commentToDelete;
        })
        
        setComments(commentsWithoutDeletedOne);
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('')
    }

    const isNewCommentEmpty = newCommentText.length === 0

    return(
       <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <Avatar src={author.avatarUrl}/>
                 <div className={styles.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                </div>
            </div>

            <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                {publishedDateRelativeNow}
            </time>
        </header>
        <div className={styles.content}>
            {content.map(line => {
                if (line.type === 'paragraph') {
                    return <p key={line.content}>{line.content}</p>;
                } else if (line.type === 'link') {
                    return <p key={line.content}><a href="#">{line.content}</a></p>;
                }
            })}
        </div>

        <form onSubmit={handleCreateComment} className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>

            <textarea 
                name='comment'
                placeholder='Comente aqui...'
                value={newCommentText}
                onChange={handleNewCommentChange}
                onInvalid={handleNewCommentInvalid}
                required
            />

            <footer>
                <button disabled={isNewCommentEmpty} type="submit">
                    Publicar
                </button>
            </footer>
        </form>
        
        <div className={styles.commentList}>
            {comment.map((comment) => {
                return (
                    <Comment 
                        key={comment} 
                        content={comment} 
                        onDeleteComment={deleteComment}
                    />
                )
            })}
        </div>
        
       </article>
    )
}