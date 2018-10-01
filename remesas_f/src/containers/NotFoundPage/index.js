/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';

import messages from './messages';

export default function NotFound() {
  return (
      <h1>
       
        {...messages.header} 

      </h1>
  );
}
