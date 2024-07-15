// profiles.tsx
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  Text,
  Flex,
  Box,
  Button,
} from "@chakra-ui/react";
import { AppDispatch, AppState } from "../Redux/Store";
import { fetchUser } from "../UserRedux/Action";
import { UserInterface } from "../Interfaces/UserInterface";
import { useEffect, useRef, useState } from "react";
import { Input } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { saveAs } from "file-saver";
import { jsPDF } from "jspdf";

import { WarningIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
export const Profiles = () => {
  const [findUser, setFindUser] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const { isError, isLoading, user } = useSelector(
    (state: AppState) => state.user
  );
  const [searchRes, setSearchRes] = useState<UserInterface[]>([]);
  const [inp, setInp] = useState("");
  const [val, setVal] = useState("");

  const [showData, setShowData] = useState<String[]>([]);
  const [socialIntegration, setSocialIntegration] = useState("");
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFindUser(value);
  };
  const ref = useRef<number>(0);
  const handleSearch = () => {
    ref.current = setTimeout(() => {
      let narr = user.filter((ele: UserInterface) => {
        return ele.name.toLowerCase().includes(findUser.toLowerCase());
      });
      setSearchRes(narr);
    }, 2000);
    return () => clearInterval(ref.current);
  };

  const exportAsPdf = (element: UserInterface) => {
    const doc = new jsPDF();

    doc.text(element.name, 25, 25);
    doc.text(element.designation, 25, 30);
    doc.text(element.location, 25, 35);
    doc.text(element.skills, 25, 40);
    doc.text(element.projects, 25, 45);
    doc.text(element.bio, 25, 50);
    doc.save("myportfolio.pdf");
  };

  const exportAsHtml = (element: UserInterface) => {
    const htmlFile = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
    <style>
      div{
      border:1px solid;
      border-radius:12px;
      }
    </style>
</head>
<body>
    <div>
    <h3>${element.name}</h3>
    <h4>${element.designation}</h4>
    <h4>${element.location}</h4>
    <h4>${element.skills}</h4>
    <h4>${element.projects}</h4>
    <h5>${element.bio}</h5>
    </div>
</body>
</html>
    `;
    const blobParts = new Blob([htmlFile], {
      type: 'text/html;charset="UTF-8"',
    });
    saveAs(blobParts);
  };

  const handleExport = (element: UserInterface, value: "html" | "pdf") => {
    if (value === "pdf") {
      exportAsPdf(element);
    } else if (value === "html") {
      exportAsHtml(element);
    }
  };
  const handleSocialMedia = (social: string) => {
    if (social.toLowerCase().includes("github")) {
      setInp(social);
    } else if (social.toLowerCase().includes("linkedin")) {
      setInp(social);
    } else if (social.toLowerCase().includes("twitter")) {
      setInp(social);
    }
  };

  const handleSocialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setVal(value);
    setSocialIntegration(value);
  };
  const handleSubmit = () => {
    setShowData((prev) => {
      return [...prev, val];
    });
    setSocialIntegration("");
    setInp("");
  };
  const displayUsers = searchRes.length === 0 ? user : searchRes;
  return (
    <Box marginLeft={"3"} display={"flex"} flexDirection={"column"} gap="4">
      <Flex justify={"space-between"}>
        <Input
          w="75%"
          placeholder="Basic usage"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <Button onClick={handleSearch}>Search</Button>
      </Flex>
      <Flex wrap={"wrap"} gap="4">
        {isError && (
          <h4>
            An error has occurred <WarningIcon />{" "}
          </h4>
        )}
        {isLoading && (
          <h4>
            Loading... <Spinner color="green.400" />{" "}
          </h4>
        )}

        {displayUsers &&
          displayUsers.length > 0 &&
          displayUsers.map((ele: UserInterface, i: number) => {
            let bgStyle = {};
            if (ele.bg) {
              try {
                bgStyle = JSON.parse(ele.bg);
              } catch (e) {
                console.error("Error parsing background style:", e);
              }
            }
            return (
              <Card style={bgStyle} w="300px" key={i}>
                <CardBody>
                  <Stack mt="6" spacing="3">
                    <Heading size="md">Name:{ele.name}</Heading>
                    <Heading size="sm">Designation:{ele.designation}</Heading>
                    <Heading size="sm">Location: {ele.location}</Heading>
                    <Heading size="sm">Skills: {ele.skills}</Heading>
                    <a href={ele.projects}>
                      <strong>Projects</strong>
                    </a>
                    {inp && (
                      <Input
                        placeholder={inp}
                        _placeholder={{ opacity: 1, color: "black" }}
                        onChange={(e) => {
                          handleSocialChange(e);
                        }}
                      ></Input>
                    )}
                    {socialIntegration.length > 0 && (
                      <Button onClick={handleSubmit}>Submit</Button>
                    )}
                    {showData &&
                      showData.map((ele1, i) => {
                        return (
                          <Heading key={i} size="sm">
                            {ele1}
                          </Heading>
                        );
                      })}

                    <Text>{ele.bio}</Text>
                  </Stack>
                  <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                      Link Social Media
                    </MenuButton>
                    <MenuList>
                      <MenuItem
                        onClick={() => {
                          handleSocialMedia("github");
                        }}
                      >
                        Github
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          handleSocialMedia("linkedin");
                        }}
                      >
                        LinkedIn
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          handleSocialMedia("twitter");
                        }}
                      >
                        Twitter
                      </MenuItem>
                    </MenuList>
                  </Menu>
                  <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                      Actions
                    </MenuButton>
                    <MenuList>
                      <MenuItem
                        onClick={() => {
                          handleExport(ele, "html");
                        }}
                      >
                        Export as HTML
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          handleExport(ele, "pdf");
                        }}
                      >
                        Export as pdf
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </CardBody>
                <Divider />
              </Card>
            );
          })}
        {!searchRes && <h4>No matches found</h4>}

        {!isLoading && displayUsers && displayUsers.length === 0 && (
          <h4>
            No users found <WarningIcon />{" "}
          </h4>
        )}
      </Flex>
    </Box>
  );
};
