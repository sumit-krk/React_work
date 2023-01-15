import styles from './search.module.css'
const Search=()=>{
    return <div className={styles.searchDiv}>
        <input placeholder='Search for products...' style={{width:'300px', height:'30px', outline:'none'}}/>
        <span>
            <i class="fa fa-search" aria-hidden="true" style={{ fontSize: "35px", cursor:"pointer"}}></i>
         </span>
    </div>
}
export default Search;