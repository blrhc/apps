// Copyright 2017-2019 @polkadot/app-accounts authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { I18nProps } from '@polkadot/ui-app/types';

import React from 'react';
import { AddressSummary, Button, Modal } from '@polkadot/ui-app';

import translate from './translate';

type Props = I18nProps & {
  address: string,
  onClose: () => void,
  doForget: () => void
};

class Forgetting extends React.PureComponent<Props> {
  render () {
    return (
      <Modal
        className='accounts--Forgetting-Modal'
        dimmer='inverted'
        open
        size='tiny'
      >
        {this.renderContent()}
        {this.renderButtons()}
      </Modal>
    );
  }

  renderButtons () {
    const { onClose, doForget, t } = this.props;

    return (
      <Modal.Actions>
        <Button.Group>
          <Button
            isNegative
            onClick={onClose}
            label={t('Cancel')}
          />
          <Button.Or />
          <Button
            isPrimary
            onClick={doForget}
            label={t('Forget')}
          />
        </Button.Group>
      </Modal.Actions>
    );
  }

  renderContent () {
    const { address, t } = this.props;

    return (
      <>
        <Modal.Header>
          {t('Confirm key removal')}
        </Modal.Header>
        <Modal.Content>
          <AddressSummary value={address} />
        </Modal.Content>
      </>
    );
  }
}

export default translate(Forgetting);
