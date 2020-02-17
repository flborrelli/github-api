import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'


function UserCard (){
  return(
    <Card>
    <Image src='/images/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='code branch' />
        22 Repos
      </a>
    </Card.Content>
  </Card>
  )
}

export default UserCard;