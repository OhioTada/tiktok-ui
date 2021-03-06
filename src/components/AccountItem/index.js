import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);
function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ea0854578085ab26effc2c7b8cefa270~c5_300x300.webp?x-expires=1653660000&x-signature=PdaNE0KmkHEs9STxTU0U0X8oFdQ%3D" alt='Hoaa'/>
            <div className={cx('info')}>
                <h4 className={cx('name')}>Nguyễn Văn A
                    <FontAwesomeIcon className = {cx('check')}icon={faCheckCircle}/>
                </h4>
                <span className={cx('userName')}>nguyen van a</span>
            </div>
        </div>
     );
}

export default AccountItem;