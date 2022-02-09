import { cn } from '@bem-react/classname';

import './Product.scss';

const cnProduct = cn('Product');

export const Product = () => {
  return (
    <section className={cnProduct()}>
      <div className={cnProduct('container')}>
        <h3 className={cnProduct('container-title')}>Custom dev</h3>
        <ul className={cnProduct('container-list')}>
          <li>.Net</li>
          <li>React</li>
          <li>React Native</li>
        </ul>
      </div>
      <div className={cnProduct('container')}>
        <h3 className={cnProduct('container-title')}>Mobile</h3>
        <ul className={cnProduct('container-list')}>
          <li>React Native</li>
          <li>Flutter</li>
        </ul>
      </div>
      <div className={cnProduct('container', { last: true })}>
        <h3 className={cnProduct('container-title')}>Web</h3>
        <ul className={cnProduct('container-list')}>
          <li>React</li>
          <li>Vue</li>
          <li>.Python</li>
        </ul>
      </div>
    </section>
  );
};
