import Home from '../client/src/components/Home.jsx';
import expect from 'expect';
import expectJSX from 'expectJSX';
import React from 'react';



describe('Home test', function() {
  it('Without success messages test', function() {
	const rendered = createRenderer();

	rendered.render(<Home />)

	expect(rendered.getRenderOutput()).toEqualJSX({
		<Card className="container">
    		<CardTitle title="React Application" subtitle="This is the home page." />
  		</Card>
  		});
	});
});
