
import FeatureItem from "./FeatureItem";

function PricingCol({tier, pricing, features}){
    return (
        <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">{tier}</h5>
                    <h6 className="card-price text-center">
                        ${pricing}<span className="period">/month</span>
                    </h6>
                    <hr />
                    <ul className="fa-ul">
                        {/* Create the list of features */}
                        {features.map((feature) => {
                            console.log(feature);
                            return (
                            <FeatureItem 
                                title={feature.title} 
                                availability={feature.availability} 
                                key={feature.id}
                            />
                           ) 
                        })}
                    </ul>
                    <div className="d-grid">
                        <a href="#" className="btn btn-primary text-uppercase">Button</a>
                    </div>
                </div>
            </div> 
        </div>
    )

}



export default PricingCol;