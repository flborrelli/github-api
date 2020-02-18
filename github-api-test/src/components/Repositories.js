import React from 'react';
import { Button, Icon, Card } from 'semantic-ui-react'


function Repositories (props){
  console.log(props.getReposArr)
  return(
    <>
    <Button onClick={props.reposButton} type='button'>Show Repos</Button>
    {
      props.getReposArr.length ? 
      props.getReposArr.map(repo => {
        return <Card.Group>
        <Card>
        <Card.Content>
        <Card.Header>{repo.name}</Card.Header>
        <Card.Meta><Icon name='star' className='star'/> {repo.stargazers_count} stars</Card.Meta>
        <Card.Description>
        </Card.Description>
      </Card.Content>
    </Card>
    </Card.Group>
      })
      :
      <div>No repos</div>
    }
    </>
  )
}

export default Repositories;