import React, { memo } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import Repositories from './Repositories';


function UserCard (props){
  console.log(props.getName)
  return(
    <div className='d-flex flex-column align-items-center mt-3'>
    {props.getError ? <h1><Icon name='dont'/> User {props.getError.toLowerCase()}, please insert a valid user.</h1> :
      <>
      <Card>
    <Image src={props.getAvatar} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.getName}</Card.Header>
      <Card.Meta>
        <span className='date'>@{props.getUsername}</span>
      </Card.Meta>
      <Card.Meta>
        <span className='date'>{props.getLocation}</span>
      </Card.Meta>
      <Card.Description>
        {props.getBio}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='code branch' />
        {props.getNumberOfRepositories} public repositories
      </a>
    </Card.Content>
  </Card>
    <div className='repos'>
      <Repositories getName={props.getName} getReposArr={props.getReposArr} reposButton={props.reposButton} reposFlag={props.reposFlag}/>
    </div>
    </>
    }
    </div>
  )
}

export default memo(UserCard);