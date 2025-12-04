import React, { Component } from "react";
import RsvpHere from "./RsvpHere";

function StoryCopy() {
  const stories = [
    "Fred and Grace met in 2010 when he was an instructor for the Freshman Interest Group that she signed up for at UW. He immediately took a liking to Grace and admittedly did not try to mask it. Due to of University policy for instructors and educators, he was not allowed to date a student during the quarter in which he was grading them.",
    "Instead, the first day of Spring quarter Fred messaged Grace and asked her to lunch to which she hesitantly agreed...",
    "After 8 years of dating Fred finally propsed back on campus where it all started."
  ]

  return (
    <div className="our-story-copy col-12">
      {stories.map((story) => (
        <p key={story}>{story}</p>
      ))}
    </div>
  )
}

function TidbitsCopy() {
  const tidbits = [
    {
      question: "How did you first meet?",
      answer: "See Our Story!"
    },
    {
      question: "Who's going to take out the trash?",
      answer: "Probably Grace before heading out to work in the AM"
    },
    {
      question: "What's your favorite activity together?",
      answer: "Going to the dingy Phở Bắc Boat restaurant on rainy days in the International district. The flickering lights, chairs from the 80's, and sticky table tops were all forgiven by the legendary bowl of piping hot goodness"
    },
    {
      question: "Most memorable date?",
      answer: "Fred was late on their first date at Thai 65 on the Ave... He still hears about it a decade later"
    },
    {
      question: "Where are you going for your honeymoon?",
      answer: "Japan and South Korea"
    },
    {
      question: "Most memorable trip taken together?",
      answer: "Every trip we have ever taken to Hawaii has been amazing; all of the delicious foods, tasty desserts, and of course the beautiful beaches. We even saw a Monk Seal on the North Shore on our last visit."
    },
  ]

  return (
    <div className="qa-copy col-12">
      {tidbits.map((tidbit, index) => (
        <div key={index}>
          <strong>{tidbit.question}</strong>
          <p>{tidbit.answer}</p>
        </div>
      ))}
    </div>
  )
}

class Ourstory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showStory : true,
    }

    this.clickStory = this.clickStory.bind(this);
    this.clickTidbits = this.clickTidbits.bind(this);
  }

  clickStory() {
    this.setState({
      showStory : true,
    })
  }

  clickTidbits() {
    this.setState({
      showStory : false,
    })
  }

  render() {
    const { showStory } = this.state

    return (
      <div className="partial text-center">
        <div className="row">
          <div className="headerImage col-12 col-sm-8 offset-sm-2">
             <img src="https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/engagement%2FGrace_Fred_Engagement_HiRes_(9_of_83).jpg?alt=media&token=e4f4f402-388a-4b2c-ab9e-ca47627eabe9" alt="ourstory hero" />
          </div>
          <div className="col-2"></div>
          
          <div className="vector col-12 text-center">
            <img src="https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/ladybug-vector.png?alt=media&token=7a0ac9f4-a675-4eab-a12e-2bb16e946596" alt="ladybug vector" />
          </div>
          
          <div className="details col-12 col-sm-10 offset-sm-1">
            <div className="subheader-subnav">
              <div onClick={this.clickStory} className="our-story-subhead subhead col-6" 
                style={{fontWeight: this.state.showStory
                  ? 'bold'
                  : 'normal'
                }}>
                OUR STORY
              </div>
              <div onClick={this.clickTidbits} className="qa-subhead subhead col-6" 
                style={{fontWeight: !this.state.showStory
                  ? 'bold'
                  : 'normal'
                }}>
                TIDBITS
              </div>
            </div>

            {showStory
              ? <StoryCopy />
              : <TidbitsCopy />
            }

          </div>

          <RsvpHere />
        </div>
      </div>
    );
  }
}
 
export default Ourstory;