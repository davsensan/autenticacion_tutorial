import Home from '../client/src/components/Home.jsx';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import React from 'react';
import {createRenderer} from 'react-addons-test-utils';
import { Card, CardTitle, CardText } from 'material-ui/Card';
expect.extend(expectJSX);


describe('Home test', function() {
  it('Without success messages', function() {
	const rendered = createRenderer();
	const actualElement = rendered.render(<Home />);
	const expectElement = <Card className="container"> 
								<CardTitle title="React Application" subtitle="This is the home page." />
						  </Card>;

	expect(actualElement).toEqualJSX(expectElement)
		
	});
  it('Include success messages', function() {
	const rendered = createRenderer();
	const actualElement = rendered.render(<Home successMessage="Hola, mi nombre es David"/>);
	const includeJSX = <CardText style={{ fontSize: '16px', color: 'green' }}>Hola, mi nombre es David</CardText>;

	expect(actualElement).toIncludeJSX(includeJSX)
		
	});

  it('With success messages', function() {
	const rendered = createRenderer();
	const actualElement = rendered.render(<Home successMessage="Hola, mi nombre es David"/>);
	const expectElement = <Card className="container"> 
								<CardTitle title="React Application" subtitle="This is the home page." />
								<CardText style={{ fontSize: '16px', color: 'green' }}>Hola, mi nombre es David</CardText>
						  </Card>;

	expect(actualElement).toEqualJSX(expectElement)
		
	});
});
