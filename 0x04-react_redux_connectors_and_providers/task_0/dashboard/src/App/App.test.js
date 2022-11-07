import React from 'react';
import App, { mapStateToProps } from './App';
import { mount } from 'enzyme';
import { assert } from 'chai';
import { StyleSheetTestUtils } from 'aphrodite';
import { Map } from 'immutable';

describe('mapStateToProps returns', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  const defaultState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {
      email: '',
      password: '',
      isLoggedIn: false,
    },
  });

  const rtnProps = {
    isLoggedIn: false,
    isNotificationDrawerVisible: false,
    user: {
      email: '',
      password: '',
      isLoggedIn: false,
    },
  };

  it('expected object from state', () => {
    expect(mapStateToProps({ ui: defaultState })).toEqual(rtnProps);
  });
});
