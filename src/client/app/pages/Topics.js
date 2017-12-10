import React from 'react'

const topicCollection = {
  get: () => [
      { title: 'a'},
      { title: 'b'},
      { title: 'c'},
      { title: 'd'},
      { title: 'e'},
      { title: 'f'},
    ]
} 

const withList = 
({ collection }) => 
(Component) => 
(props) => <Component {...props} topics={ collection.get() } />


const Topics = (props) => 
  <div>
    <h3> Topics </h3>
    {props.topics.map(
      topic => <h2 key={topic.title}>{topic.title}</h2>
    )}
    <List data={topics} actions={['edit', 'delete']} />
    <SmartForm collection={topicCollection} id={this.props.id}/>
  </div>




const options = {
  collection: topicCollection
}

export default withList(options)(Topics)