import React from 'react'
import classes from './ErroeModel.module.css'
import Card from '../UI/Card'
import Button from '../UI/Button'

export default function ErrorModel(props) {
  return (
    <div>
        <div className={classes.backdrop}/>
      <Card className={classes.modal}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
            <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
            <Button onClick={props.onError}>Okay</Button>
        </footer>
      </Card>
    </div>
  )
}
