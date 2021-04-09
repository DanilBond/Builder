const Componentitem = ({img, name, classes, onStartLoadingEvent}) => {
    return ( 
        <div className={classes.Part} >
            <div className={classes.Parent}>
            <span className={classes.ImgBg}><img src={img} alt=""/></span>
            <span className={classes.Text}>{name}</span>
            </div>
        </div>
     );
}
 
export default Componentitem;