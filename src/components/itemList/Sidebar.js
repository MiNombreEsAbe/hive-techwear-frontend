import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar(props) {
    return (
        <div className="sidebar">
            <select name="category" onChange={props.categoryChange} defaultValue={props.category}>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <div className="itemChoosers">
                <p className="name">Category Lists</p>
                <button onClick={() => props.itemChange("T-Shirts")}>
                    T-Shirts <FontAwesomeIcon icon={faAngleRight} />
                </button>
                <button onClick={() => props.itemChange("Shirts")}>
                    Shirts <FontAwesomeIcon icon={faAngleRight} />
                </button>
                <button onClick={() => props.itemChange("Bottoms")}>
                    Bottoms <FontAwesomeIcon icon={faAngleRight} />
                </button>
                <button onClick={() => props.itemChange("Hats")}>
                    Hats <FontAwesomeIcon icon={faAngleRight} />
                </button>
            </div>
        </div>
    );
} 