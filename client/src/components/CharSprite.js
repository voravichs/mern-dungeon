const CharSprite = (props) => {
    return (
        <img className="w-1/4" src={props.sprite.link} alt={props.sprite.name}></img>
    )
}

export default CharSprite;