import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
      "source": { "id": "bbc-sport", "name": "BBC Sport" },
      "author": null,
      "title": "Why does rain stop cricket and what can be done?",
      "description": "Why was there no reserve day at the Ashes Test? And what else can be done when it rains at the cricket?",
      "url": "http://www.bbc.co.uk/sport/cricket/66289926",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/144FF/production/_130499138_gettyimages-1565362039.jpg",
      "publishedAt": "2023-07-24T14:37:23.7610497Z",
      "content": "Just 30 overs were possible on the final two days of the fourth Ashes Test at Old Trafford\r\nAfter two days of Manchester rain you would think some glorious Monday sunshine would be a welcome sight.\r\n… [+6670 chars]"
    },
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ];
constructor(){
    super();
    this.state = {
        articles: this.articles,
        loading: false
    }
}
  render() {
    return (
      <div className='container my-3'>
      <h2>Aviral's News App - Top Headlines</h2>      
      
      <div className="row">
      {this.state.articles.map((element)=>{
        return <div className="col-md-4" key={element.url}>
        
         <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage}
         newsUrl={element.url}/>
      </div>
         })}
      </div>

      </div>
    )
  }
}

export default News
