import React, { memo } from 'react';
import { Button, Icon, Card } from "semantic-ui-react";

function Repositories(props) {
  return (
    <>
      <div className='d-flex justify-content-center'>
      {
        props.reposFlag ? <div>
        <Icon name='angle double down' className='arrow-down'/>
        <Button onClick={props.reposButton} type="button" className="mb-3" color='blue'>
        Hide Repos
      </Button>
      <Icon name='angle double down' className='arrow-down'/>
        </div> :
      <Button onClick={props.reposButton} type="button" className="mb-3" color='blue'>
        Show Repos
      </Button>
      }
      
      </div>
      <div className="container">
        <div className="row">
      {props.reposFlag ? (
        props.getReposArr.length ? (
          props.getReposArr.map(repo => {
            return (
              <div className='repos-container col-sm-4' key={repo.id}>
              <Card.Group className='my-3'>
                <Card>
                  <Card.Content>
                    <Card.Header><Icon name='code'/>{repo.name}</Card.Header>
                    <Card.Meta className='mt-3'>
                      <Icon name="star" className="star" />{" "}
                      {repo.stargazers_count} stars
                    </Card.Meta>
                    <Card.Description></Card.Description>
                  </Card.Content>
                </Card>
              </Card.Group>
              </div>
            );
          })
        ) : (
          <div>{props.getName} has no repos yet.</div>
        )
      ) : (
        <div></div>
      )}

        </div>
      </div>
    </>
  );
}

export default memo(Repositories);
