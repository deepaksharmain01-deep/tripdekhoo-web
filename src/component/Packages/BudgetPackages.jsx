import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import packagesData from '../../../packages.json';
import { Container, Row, Col, Button } from 'react-bootstrap'; 
import { getOptimizedUrl } from '../../utils/imageUtils';
import SEO from '../Common/SEO';
import '../DestinationComman/Details.css'; // Import the theme CSS

const BudgetPackages = () => {
    const { price } = useParams();
    const navigate = useNavigate();
    const [filteredPackages, setFilteredPackages] = useState([]);
    const budgetAmount = parseInt(price, 10);

    useEffect(() => {
        if (!budgetAmount) return;

        let allPackages = [];
        if (packagesData && packagesData.destinations) {
            packagesData.destinations.forEach(dest => {
                if (dest.packages) {
                    dest.packages.forEach(pkg => {
                        if (pkg.price <= budgetAmount) {
                            allPackages.push({ ...pkg, destinationPath: dest.destination });
                        }
                    });
                }
            });
        }
        setFilteredPackages(allPackages);
    }, [budgetAmount]);

    const handleCardClick = (destination, id) => {
        navigate(`/packages/${destination}/itinerary/${id}`);
    };

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <SEO 
        key={price}
        title={`Packages under ₹${budgetAmount.toLocaleString('en-IN')}`}
        description={`Explore the best tour packages within your budget of ₹${budgetAmount.toLocaleString('en-IN')}.`}
        url={`/budget/${price}`}
      />
            <Container>
                 <div className="mb-5 text-center">
                    <h2 className="fw-bold" style={{color: '#7B5CFF'}}>Packages under ₹{budgetAmount.toLocaleString('en-IN')}</h2>
                    <p className="text-muted">Explore the best packages within your budget</p>
                 </div>

                <Row className="justify-content-center">
                    {filteredPackages.length > 0 ? (
                        filteredPackages.map((pkg, i) => (
                            <Col key={i} md={6} lg={3} className="mb-4">
                              <div className="package-card text-center" style={{background: 'white'}}>
                                <div className="image-wrapper">
                                  <img src={getOptimizedUrl(pkg.image, 400)} alt="package" className="package-image" loading="lazy" />
                                </div>
                                <h5 className="package-title mt-3">{pkg.title}</h5>
                                <p className="package-subtitle">{pkg.name}</p>
                                <Button 
                                  className="details-button mt-2" 
                                  style={{background: "linear-gradient(90deg, #8c52ff, #5a2ea6)", border: 'none'}}
                                  onClick={() => handleCardClick(pkg.destinationPath, pkg.id)}
                                >
                                  Explore Itinerary →
                                </Button>
                                <h5 className="package-price mt-2" style={{fontSize:"16px"}}>
                                  {Number.isFinite(pkg.price) && `Rs ${new Intl.NumberFormat('en-IN').format(pkg.price)}/-`}
                                </h5>
                              </div>
                            </Col>
                        ))
                    ) : (
                        <Col className="text-center py-5">
                            <div className="text-muted">
                                <i className="fas fa-search fa-3x mb-3"></i>
                                <h4>No packages found in this range.</h4>
                                <p>Try checking higher budget options.</p>
                                <Button variant="primary" onClick={() => navigate(-1)} className="mt-2" style={{background: "#8c52ff", border: "none"}}>Go Back</Button>
                            </div>
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    );
};

export default BudgetPackages;
