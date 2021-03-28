import { Container } from './styles'
import { IoIosPin } from 'react-icons/io'
import { FiMail } from 'react-icons/fi'
import { HiOutlineLink } from 'react-icons/hi'

export const Infos = () => {
  return (
    <Container>
      <p>
        <IoIosPin />
        <span>San francisco, US</span>
      </p>

      <a href="#email">
        <FiMail />
        <span>jameslee@website.com</span>
      </a>


      <a href="#website">
        <HiOutlineLink />
        <span>http://www.website.com</span>
      </a>

    </Container>
  )
}
