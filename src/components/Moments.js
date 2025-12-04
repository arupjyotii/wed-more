import React, { Component } from "react";
import RsvpHere from "./RsvpHere";
import Modal from "react-bootstrap/Modal"
import 'bootstrap/dist/css/bootstrap.min.css'

class Moments extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeModal: null,
      column1: [
        {
          image: 'https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/engagement%2FGrace_Fred_Engagement_HiRes_(12_of_83).jpg?alt=media&token=9c7452ce-d486-445f-926f-a6ccf8a3ade2',
          alt: 'engagement1'
        },
        {
          image: 'https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/engagement%2FGrace_Fred_Engagement_HiRes_(13_of_83).jpg?alt=media&token=d8066bef-a390-4dd6-bc7b-56e8d7f633d4',
          alt: 'engagement2'
        },
        {
          image: 'https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/engagement%2FGrace_Fred_Engagement_HiRes_(14_of_83).jpg?alt=media&token=242cde20-6fd9-4421-8a43-62c46fc6a304',
          alt: 'engagement3'
        },
        {
          image: 'https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/engagement%2FGrace_Fred_Engagement_HiRes_(20_of_83).jpg?alt=media&token=472e7dea-f36a-497d-b673-a02e3c487fd3',
          alt: 'engagement4'
        },
        {
          image: 'https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/engagement%2FGrace_Fred_Engagement_HiRes_(22_of_83).jpg?alt=media&token=08688b78-cc2a-4fb0-becc-3c3619182280',
          alt: 'engagement5'
        },
        {
          image: 'https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/engagement%2FGrace_Fred_Engagement_HiRes_(25_of_83).jpg?alt=media&token=21f63629-2e79-4ee8-b0f3-ff53f5b88d53',
          alt: 'engagement6'
        },
        {
          image: 'https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/engagement%2FGrace_Fred_Engagement_HiRes_(61_of_83).jpg?alt=media&token=4c328ea0-035d-4405-8009-31e21d2531b4',
          alt: 'engagement7'
        },
        {
          image: 'https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/engagement%2FGrace_Fred_Engagement_HiRes_(62_of_83).jpg?alt=media&token=6a02261e-a2ad-4404-8a2a-7ec390612be9',
          alt: 'engagement8'
        },
      ],
      column2: [
        {
          image: 'https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/engagement%2FGrace_Fred_Engagement_HiRes_(82_of_83).jpg?alt=media&token=5d0dc09a-53ed-498a-8bc2-67b1fb1ad2df',
          alt: 'engagement9'
        },
        {
          image: 'https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/engagement%2FGrace_Fred_Engagement_HiRes_(27_of_83).jpg?alt=media&token=5ad57ceb-5fde-46f3-b685-68879ff6cba2',
          alt: 'engagement10'
        },
        {
          image: 'https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/engagement%2FGrace_Fred_Engagement_HiRes_(30_of_83).jpg?alt=media&token=ff5619c5-ef8c-4507-a160-a1b7ba164bf1',
          alt: 'engagement11'
        },
        {
          image: 'https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/engagement%2FGrace_Fred_Engagement_HiRes_(31_of_83).jpg?alt=media&token=bdfaf2bd-5a3b-44ea-bc9c-0197401100b3',
          alt: 'engagement12'
        },
        {
          image: 'https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/engagement%2FGrace_Fred_Engagement_HiRes_(32_of_83).jpg?alt=media&token=c8af70e1-fc31-4b44-962f-faec4fcfe8a1',
          alt: 'engagement13'
        },
        {
          image: 'https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/engagement%2FGrace_Fred_Engagement_HiRes_(34_of_83).jpg?alt=media&token=271c06be-6449-436d-bfe4-2ab6becaca13',
          alt: 'engagement14'
        },
        {
          image: 'https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/engagement%2FGrace_Fred_Engagement_HiRes_(35_of_83).jpg?alt=media&token=177e21c6-6fde-4247-b5f1-147af9cd79b4',
          alt: 'engagement15'
        },
        {
          image: 'https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/engagement%2FGrace_Fred_Engagement_HiRes_(66_of_83).jpg?alt=media&token=9fe30396-acbb-4acb-b79d-42d553d0aa07',
          alt: 'engagement16'
        },
        {
          image: 'https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/engagement%2FGrace_Fred_Engagement_HiRes_(6_of_83).jpg?alt=media&token=d6885af3-945b-4155-a959-e0807dfefe21',
          alt: 'engagement17'
        },
        {
          image: 'https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/engagement%2FGrace_Fred_Engagement_HiRes_(83_of_83).jpg?alt=media&token=61aa9d15-454f-49fe-8099-37275e6b6b7f',
          alt: 'engagement18'
        },
      ],
      column3: [
        {
          image: 'https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/engagement%2FGrace_Fred_Engagement_HiRes_(37_of_83).jpg?alt=media&token=bb38ffb4-d9f5-4776-8595-edd0970ceecf',
          alt: 'engagement19'
        },
        {
          image: 'https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/engagement%2FGrace_Fred_Engagement_HiRes_(39_of_83).jpg?alt=media&token=649803d9-8067-42c8-adce-cf7963892ea9',
          alt: 'engagement20'
        },
        {
          image: 'https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/engagement%2FGrace_Fred_Engagement_HiRes_(40_of_83).jpg?alt=media&token=c1f69f23-0659-45eb-8b2a-dc08c6d969f4',
          alt: 'engagement21'
        },
        {
          image: 'https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/engagement%2FGrace_Fred_Engagement_HiRes_(43_of_83).jpg?alt=media&token=cda8ab70-22e3-41c8-bf69-f35d9aaa56f2',
          alt: 'engagement22'
        },
        {
          image: 'https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/engagement%2FGrace_Fred_Engagement_HiRes_(44_of_83).jpg?alt=media&token=28191e83-ea2f-434a-81b3-2c522b4329d0',
          alt: 'engagement23'
        },
        {
          image: 'https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/engagement%2FGrace_Fred_Engagement_HiRes_(47_of_83).jpg?alt=media&token=1a096acd-742c-4dd6-aeeb-d1a0c4423dad',
          alt: 'engagement24'
        },
        {
          image: 'https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/engagement%2FGrace_Fred_Engagement_HiRes_(74_of_83).jpg?alt=media&token=f9e0c315-628c-4a74-82b2-2aa478c9df31',
          alt: 'engagement25'
        },
        {
          image: 'https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/engagement%2FGrace_Fred_Engagement_HiRes_(77_of_83).jpg?alt=media&token=ad0fbea5-aaa8-4dd0-8b20-6d5a2fda1a10',
          alt: 'engagement26'
        },
      ],
      column4: [
        {
          image: 'https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/engagement%2FGrace_Fred_Engagement_HiRes_(9_of_83).jpg?alt=media&token=e4f4f402-388a-4b2c-ab9e-ca47627eabe9',
          alt: 'engagement27'
        },
        {
          image: 'https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/engagement%2FGrace_Fred_Engagement_HiRes_(4_of_83).jpg?alt=media&token=8867a41b-548d-4e2b-8a7d-d88aec70d290',
          alt: 'engagement28'
        },
        {
          image: 'https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/engagement%2FGrace_Fred_Engagement_HiRes_(50_of_83).jpg?alt=media&token=6341940f-f47e-40db-b882-04aeb961a056',
          alt: 'engagement29'
        },
        {
          image: 'https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/engagement%2FGrace_Fred_Engagement_HiRes_(52_of_83).jpg?alt=media&token=b98464c2-9beb-47c1-9619-622c444821d1',
          alt: 'engagement30'
        },
        {
          image: 'https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/engagement%2FGrace_Fred_Engagement_HiRes_(54_of_83).jpg?alt=media&token=4c377634-b1eb-4a48-8358-b55c365a80ee',
          alt: 'engagement31'
        }, {
          image: 'https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/engagement%2FGrace_Fred_Engagement_HiRes_(56_of_83).jpg?alt=media&token=8dca67f8-fb1b-4bb1-8cdc-dd80b380a953',
          alt: 'engagement32'
        }, {
          image: 'https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/engagement%2FGrace_Fred_Engagement_HiRes_(58_of_83).jpg?alt=media&token=9f61e374-5dc8-4bbe-b7a2-249a8dce4efb',
          alt: 'engagement33'
        },
        {
          image: 'https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/engagement%2FGrace_Fred_Engagement_HiRes_(7_of_83).jpg?alt=media&token=5365409b-970f-478f-86b1-aebc30a0fb07',
          alt: 'engagement34'
        },
        {
          image: 'https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/engagement%2FGrace_Fred_Engagement_HiRes_(81_of_83).jpg?alt=media&token=e05488c1-7bb5-440f-a4fc-e714acba0ed8',
          alt: 'engagement35'
        },
      ]
    }

    this.clickHandler = this.clickHandler.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  clickHandler(e, index) {
    this.setState({
      activeModal: index
    })
  }

  hideModal() {
    this.setState({
      activeModal: null
    })
  }

  render() {
    const { column1, column2, column3, column4 } = this.state
    return (
      <div className="partial text-center">
        <div className="row">
          <div className="grid">
            <div className="column">
              { column1.map((tile, index) => (
                <React.Fragment>
                
                {/* Mobile handler */}
                <div className="image-tile d-sm-none">
                  <img src={tile.image} alt={tile.alt} key={tile.alt}/>
                </div>

                {/* Desktop handler */}
                <div className="image-tile d-none d-sm-block">
                  <img src={tile.image} alt={tile.alt} key={tile.alt} onClick={e => this.clickHandler(e, index)}/>
                </div>

                {/* Modal handler */}
                <Modal show={this.state.activeModal === index} onHide={this.hideModal}>
                  <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="modal-body-wrapper col-12">
                      <img className="img-responsive" src={tile.image} alt={tile.alt} />
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <div onClick={this.hideModal}>Close</div>
                  </Modal.Footer>
                </Modal>
                </React.Fragment>
              ))}
            </div>
            <div className="column">
              { column2.map((tile, index) => (
                <React.Fragment>
                
                {/* Mobile handler */}
                <div className="image-tile d-sm-none">
                  <img src={tile.image} alt={tile.alt} key={tile.alt}/>
                </div>

                {/* Desktop handler */}
                <div className="image-tile d-none d-sm-block">
                  <img src={tile.image} alt={tile.alt} key={tile.alt} onClick={e => this.clickHandler(e, index+100)}/>
                </div>

                {/* Modal handler */}
                <Modal show={this.state.activeModal === index+100} onHide={this.hideModal}>
                  <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="modal-body-wrapper col-12">
                      <img className="img-responsive" src={tile.image} alt={tile.alt} />
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <div onClick={this.hideModal}>Close</div>
                  </Modal.Footer>
                </Modal>
                </React.Fragment>
              ))}
            </div>
            <div className="column">
              { column3.map((tile, index) => (
                <React.Fragment>
                
                {/* Mobile handler */}
                <div className="image-tile d-sm-none">
                  <img src={tile.image} alt={tile.alt} key={tile.alt}/>
                </div>

                {/* Desktop handler */}
                <div className="image-tile d-none d-sm-block">
                  <img src={tile.image} alt={tile.alt} key={tile.alt} onClick={e => this.clickHandler(e, index+200)}/>
                </div>

                {/* Modal handler */}
                <Modal show={this.state.activeModal === index+200} onHide={this.hideModal}>
                  <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="modal-body-wrapper col-12">
                      <img className="img-responsive" src={tile.image} alt={tile.alt} />
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <div onClick={this.hideModal}>Close</div>
                  </Modal.Footer>
                </Modal>
                </React.Fragment>
              ))}
            </div>
            <div className="column">
              { column4.map((tile, index) => (
                <React.Fragment>
                
                {/* Mobile handler */}
                <div className="image-tile d-sm-none">
                  <img src={tile.image} alt={tile.alt} key={tile.alt}/>
                </div>

                {/* Desktop handler */}
                <div className="image-tile d-none d-sm-block">
                  <img src={tile.image} alt={tile.alt} key={tile.alt} onClick={e => this.clickHandler(e, index+300)}/>
                </div>

                {/* Modal handler */}
                <Modal show={this.state.activeModal === index+300} onHide={this.hideModal}>
                  <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="modal-body-wrapper col-12">
                      <img className="img-responsive" src={tile.image} alt={tile.alt} />
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <div onClick={this.hideModal}>Close</div>
                  </Modal.Footer>
                </Modal>
                </React.Fragment>
              ))}
            </div>
          </div> 

          <RsvpHere />
        </div>
      </div>
    );
  }
}
 
export default Moments;