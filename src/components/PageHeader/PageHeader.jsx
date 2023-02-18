import HeaderDropdown from './HeaderDropdown';
import {
  HeaderWrapper,
  Title,
  PageName,
  PageDescription,
  ApiLink,
} from './pageHeader.styled';

const PageHeader = () => {
  return (
    <HeaderWrapper>
      <Title>
        This is <PageName>Job Finder</PageName> training project.{' '}
      </Title>
      <PageDescription>
        <p>
          Data fetched from{' '}
          <ApiLink
            href="https://www.themuse.com/developers/api/v2"
            target="blank"
          >
            API
          </ApiLink>{' '}
          is real and you can discover the info about every position on this
          page by clicking the <b>'Details'</b> button.
        </p>{' '}
        <p>
          Click on <b>'Apply now'</b> button will open the modal with form.{' '}
          <b>'Apply'</b> button inside the form{' '}
          <b>
            <em>will not</em>
          </b>{' '}
          send an actual POST request as it is not allowed by{' '}
          <ApiLink
            href="https://www.themuse.com/developers/api/v2"
            target="blank"
          >
            API
          </ApiLink>
          . <br />
          If you are interested in applying for any of presented here position,
          you can find link for this on <b>'Details'</b> page.
        </p>
        <p>As well you can choose the category you are interested in.</p>{' '}
      </PageDescription>
      <HeaderDropdown />
    </HeaderWrapper>
  );
};

export default PageHeader;
