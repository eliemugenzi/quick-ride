

import Base from './Base';
import Text from './Text';
import Title from './Title';
import Paragraph from './Paragraph';

type TypographyProps = typeof Base & {
  Text: typeof Text;
  Title: typeof Title;
  Paragraph: typeof Paragraph;
};

const Typography = Base as TypographyProps;

Typography.Text = Text;
Typography.Title = Title;
Typography.Paragraph = Paragraph;

export default Typography;
