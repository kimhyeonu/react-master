import React from 'react';
import classNames from 'classnames/bind';

import styles from './CSSModule.module.scss';

const cx = classNames.bind(styles);

const CSSModule = () => {
  return (
    <div className={cx('wrapper', 'inverted')}>
      안녕하세요. 저는 <span className="something">CSS Module</span>입니다!
    </div>
  );
};

export default CSSModule;
