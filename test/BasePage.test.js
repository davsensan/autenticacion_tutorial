import Base from '../client/src/components/Base.jsx';
import Home from '../client/src/components/Home.jsx';
import BasePage from '../client/src/containers/BasePage.jsx';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import React from 'react';
import {createRenderer} from 'react-addons-test-utils';



describe('BasePage test', function() {
  it('Base component is in BasePage', function() {
	const rendered = createRenderer();
	const actualElement = rendered.render(<BasePage children="Prueba" />);
	const expectElement = <Base children="Prueba" />;

	expect(actualElement).toEqualJSX(expectElement);
		
	});
  it('Base component include element of property children', function(){
  	const rendered = createRenderer();
	const actualElement = rendered.render(<BasePage children={<Home/>}/>);
	const includeElement = <Home/>;

	expect(actualElement).toIncludeJSX(includeElement);
  });
});
