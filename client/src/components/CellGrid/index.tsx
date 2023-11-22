import React from "react"
import styles from "./CellGrid.module.css"
import {styled} from '../../stitches.config';

const Grid = styled('div', {
  position: 'absolute',
  height: '100%',
  width: '100%',
  display: 'grid',
  gridTemplate: 'repeat(10, 1fr) / repeat(10, 1fr)',
  marginLeft: '-20px',
  marginTop: '-20px',
})

export default function CellGrid() {
  return (
    <>
      <Grid>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <i className={styles.blur}></i>
      </Grid>
    </>
  )
}