import { Box, Heading, Divider, VStack, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaRegCommentDots, FaRegNewspaper, FaStar, FaUserSlash } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Heading textAlign="center" mb={4}>
        마이페이지
      </Heading>
      <Divider mb={6} />

      <Box display="flex">
        <Box width="20%" paddingRight={5}>
          <Heading size="md" mb={4}>
            내 활동
          </Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaRegNewspaper} color="green.500" />
              내가 쓴 글 보기
            </ListItem>
            <ListItem>
              <ListIcon as={FaRegCommentDots} color="green.500" />
              내가 쓴 댓글
            </ListItem>
            <ListItem>
              <ListIcon as={FaStar} color="green.500" />
              관심글 보기
            </ListItem>
            <ListItem>
              <ListIcon as={FaUserSlash} color="green.500" />
              차단 사용자 관리
            </ListItem>
          </List>
        </Box>

        <Box flex="1">{/* Content area can be added here */}</Box>
      </Box>
    </Box>
  );
};

export default Index;
