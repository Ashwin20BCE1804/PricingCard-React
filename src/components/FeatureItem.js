import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';

function FeatureItem({title, availability}){
    // Choose Icon based on Feature availability
    let featureIcon = availability ? faCheck : faXmark;
    // Choose to fade text based on Feature availability
    let featureClass = availability ? "" : "text-muted";
    return (
        <li class={featureClass}>
            <span className="fa-li">
                <FontAwesomeIcon icon={featureIcon} />
            </span>
            {title}
        </li>
    )
}

export default FeatureItem;