import Link from 'next/link';
import './Button.css';

export default function Button({ type, text, disabled, isButton, href }) {
  return isButton ? (
    <button className='button' type={type} disabled={disabled}>
      {text}
    </button>
  ) : (
    <Link className='link-button' href={href}>
      {text}
    </Link>
  );
}
