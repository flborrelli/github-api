import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';


function UserCard (props){
  console.log(props.getName)
  return(
    <Card>
    <Image src={props.getAvatar} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.getName}</Card.Header>
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
        {props.getRepositories} public repositories
      </a>
    </Card.Content>
  </Card>
  )
}

export default UserCard;