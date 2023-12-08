
import "../../stylesheets/ideaCard.css"

const IdeaCard = ({ isActive, handleIdea }) => {


    return (
        <div className={isActive ? "ideaContainer ActiveModule" : "ideaContainer"} onClick={handleIdea}>

            <div className="ideaSection">
                <h4>This is a Title</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti tempore non aliquid vel consequatur soluta dolor ut velit minima earum, quis deserunt molestiae asperiores quisquam vitae eaque sit hic aut.</p>

            </div>
            <span>Hola</span>

        </div >
    )
}

export default IdeaCard;