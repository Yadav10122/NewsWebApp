import React, { Component } from 'react'

export class Newsitem extends Component {
  
  render() {
    let{title,description,imageUrl,newsUrl,author,date} = this.props;
    return (
      <div>
       <div className="card" style={{width : "18rem "}}>
       <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    }> 
                        <span className="badge rounded-pill bg-danger"> Trend </span>
                    </div>
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}<span className="badge bg-secondary">New</span></p>
    <a href={newsUrl} className="btn btn-dark btn-sm">Read More</a>
    <p className="card-text"><small className="text-muted"> by{!author?"Unknown":author}on {date}</small></p>
  </div>
</div>
      </div>
    )
  }
}

export default Newsitem
