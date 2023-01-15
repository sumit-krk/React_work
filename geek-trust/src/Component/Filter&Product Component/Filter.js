import styles from './filter.module.css'
const Filter=()=>{
    const selectCategoryHandler=()=>{
        console.log("HI")
    }
    return <div className={styles.filter_Part}>
             {/* color filter box */}
            <div className={styles.checkBoxDiv}>
                <div className={styles.lable}>Color</div>
                <div className={styles.check_box}>
                <input type="checkbox" name=""  onChange={selectCategoryHandler} value={'Red'} /> <label htmlFor="">Red</label>
                </div>
                <div className={styles.check_box}>
                <input type="checkbox" name="" onChange={selectCategoryHandler}  value={"Blue"} /> <label htmlFor="">Blue</label>
                </div>
                <div className={styles.check_box}>
                <input type="checkbox" name="" onChange={selectCategoryHandler} value={'Green'} /> <label htmlFor="">Green</label>
                </div>
            </div>
              {/* gender filter box */}
              <div className="checkBoxDiv">
                <div>Gender</div>
                <div className={styles.check_box}>
                <input type="checkbox" name="" onChange={selectCategoryHandler} value={'Men'} /> <label htmlFor="">Men</label>
                </div>
                <div className={styles.check_box}>
                <input type="checkbox" name="" onChange={selectCategoryHandler} value={"Women"} /> <label htmlFor="">Women</label>
                </div>
            </div>
            {/* price filter box */}
            <div className="checkBoxDiv">
                <div className={styles.lable}>Price</div>
                <div className={styles.check_box}>
                <input type="checkbox" name="" onChange={selectCategoryHandler} value={'250'} /> <label htmlFor="">0- Rs 250</label>
                </div>
                <div className={styles.check_box}>
                <input type="checkbox" name="" onChange={selectCategoryHandler} value={"251"} /> <label htmlFor="">251- Rs 450</label>
                </div>
                <div className={styles.check_box}>
                <input type="checkbox" name="" onChange={selectCategoryHandler} value={'450'} /> <label htmlFor=""> Rs 450</label>
                </div>
            </div>
             {/* type filter div */}
             <div className="checkBoxDiv">
                <div className={styles.lable}>Type</div>
                <div className={styles.check_box}>
                <input type="checkbox" name="" onChange={selectCategoryHandler} value={'Polo'} /> <label htmlFor="">Polo</label>
                </div>
                <div className={styles.check_box}>
                <input type="checkbox" name="" onChange={selectCategoryHandler} value={"Hoodie"} /> <label htmlFor="">Hoodie</label>
                </div>
                <div className={styles.check_box}>
                <input type="checkbox" name="" onChange={selectCategoryHandler} value={'Basic'} /> <label htmlFor="">Basic</label>
                </div>
            </div>
             
        </div>
}
export default Filter