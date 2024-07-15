// themes.tsx
import {
  Card,
  Heading,
  CardBody,
  Text,
  Flex,
  Stack,
  Box,
  StackDivider,
  WrapItem,
  Wrap,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { AppDispatch, AppState } from "../Redux/Store";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { Editable, EditableInput, EditablePreview } from "@chakra-ui/react";

import {
  setSolids,
  setLinear,
  setRadial,
  setForeGround,
} from "../Redux/Action";
import { UserInterface } from "../Interfaces/UserInterface";
import { useState } from "react";
import { saveUser } from "../UserRedux/Action";
export const Themes = () => {
  const toast = useToast();
  const [user, setUser] = useState<UserInterface>({
    name: "",
    location: "",
    bio: "",
    designation: "",
    bg: "",
    skills: "",
    projects: "",
  });
  const dispatch = useDispatch<AppDispatch>();
  const {
    solid,
    linear1,
    linear2,
    radial1,
    radial2,
    foreground,
    bgActionType,
    name,
    designation,
    location,
    bio,
    skills,
    projects,
  } = useSelector((state: AppState) => state.bg);
  let bgStyle = {};
  if (bgActionType === "solid") {
    bgStyle = { backgroundColor: solid };
  } else if (bgActionType === "foreground") {
    bgStyle = { backgroundColor: foreground };
  } else if (bgActionType === "linear") {
    bgStyle = {
      backgroundImage: `linear-gradient(to right,${linear1} , ${linear2})`,
    };
  } else if (bgActionType === "radial") {
    bgStyle = { backgroundImage: `radial-gradient(${radial1} , ${radial2})` };
  }

  const handleSolid = (value: string) => {
    dispatch(setSolids(value));
  };
  const handleLinear = (value1: string, value2: string) => {
    dispatch(setLinear(value1, value2));
  };
  const handleRadial = (value1: string, value2: string) => {
    dispatch(setRadial(value1, value2));
  };
  const handleForeGround = (value: string) => {
    dispatch(setForeGround(value));
  };
  const handleChange = (name: string, value: string) => {
    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSave = () => {
    const bgstyle = JSON.stringify(bgStyle);
    dispatch(saveUser({ ...user, bg: bgstyle }));
    const examplePromise = new Promise((resolve, _reject) => {
      setTimeout(() => resolve(200), 3000);
    });
    toast.promise(examplePromise, {
      success: { title: "User Added", description: "Check Profiles" },
      error: { title: "User Not Added", description: "Something went wrong" },
      loading: { title: "Adding User", description: "Please wait" },
    });
  };
  return (
    <Box>
      <Flex direction={"column"} gap="4">
        <Heading textAlign="left">Themes</Heading>
        <Card size="md" h="20" w="100%" bg="gray.100">
          <CardBody>
            <Flex align={"center"} justify={"space-between"} gap="5">
              <Text
                style={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  maxWidth: "230px",
                }}
              >
                Apply a skin to your profile
              </Text>
              <Stack spacing={4} direction="row" align="center">
                <Flex align={"center"} justify={"space-between"} gap="5">
                  <Button gap="5" bg="white" size="md">
                    <AddIcon /> Custom
                  </Button>
                  <Button
                    onClick={handleSave}
                    bg="black"
                    color="white"
                    size="md"
                  >
                    Save
                  </Button>
                </Flex>
              </Stack>
            </Flex>
          </CardBody>
        </Card>

        <Flex gap="5">
          <Card w="50%">
            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                <Box>
                  <Heading textAlign="left" size="xs" textTransform="uppercase">
                    Solids
                  </Heading>
                  <Stack direction="column">
                    <Wrap spacing={4}>
                      <WrapItem>
                        <Button
                          onClick={() => {
                            handleSolid("black");
                          }}
                          bg="black"
                        ></Button>
                      </WrapItem>
                      <WrapItem>
                        <Button
                          onClick={() => {
                            handleSolid("red");
                          }}
                          colorScheme="red"
                        ></Button>
                      </WrapItem>
                      <WrapItem>
                        <Button
                          onClick={() => {
                            handleSolid("orange");
                          }}
                          colorScheme="orange"
                        ></Button>
                      </WrapItem>
                      <WrapItem>
                        <Button
                          onClick={() => {
                            handleSolid("yellow");
                          }}
                          colorScheme="yellow"
                        ></Button>
                      </WrapItem>
                      <WrapItem>
                        <Button
                          onClick={() => {
                            handleSolid("green");
                          }}
                          colorScheme="green"
                        ></Button>
                      </WrapItem>
                      <WrapItem>
                        <Button
                          onClick={() => {
                            handleSolid("teal");
                          }}
                          colorScheme="teal"
                        ></Button>
                      </WrapItem>
                      <WrapItem>
                        <Button
                          onClick={() => {
                            handleSolid("blue");
                          }}
                          colorScheme="blue"
                        ></Button>
                      </WrapItem>
                      <WrapItem>
                        <Button
                          onClick={() => {
                            handleSolid("cyan");
                          }}
                          colorScheme="cyan"
                        ></Button>
                      </WrapItem>
                      <WrapItem>
                        <Button
                          onClick={() => {
                            handleSolid("purple");
                          }}
                          colorScheme="purple"
                        ></Button>
                      </WrapItem>
                      <WrapItem>
                        <Button
                          onClick={() => {
                            handleSolid("pink");
                          }}
                          colorScheme="pink"
                        ></Button>
                      </WrapItem>
                    </Wrap>
                  </Stack>
                </Box>
                <Box>
                  <Heading textAlign="left" size="xs" textTransform="uppercase">
                    Linear
                  </Heading>
                  <Stack direction="column">
                    <Wrap spacing={4}>
                      <WrapItem>
                        <Button
                          onClick={() => {
                            handleLinear("white", "red");
                          }}
                          bgGradient={"linear(to-r,white,red)"}
                        ></Button>
                      </WrapItem>
                      <WrapItem>
                        <Button
                          onClick={() => {
                            handleLinear("blue", "white");
                          }}
                          bgGradient={"linear(to-r,blue,white)"}
                        ></Button>
                      </WrapItem>
                      <WrapItem>
                        <Button
                          onClick={() => {
                            handleLinear("orange", "white");
                          }}
                          bgGradient={"linear(to-l,orange,white)"}
                        ></Button>
                      </WrapItem>
                      <WrapItem>
                        <Button
                          onClick={() => {
                            handleLinear("yellow", "black");
                          }}
                          bgGradient={"linear(to-r,yellow,black)"}
                        ></Button>
                      </WrapItem>
                      <WrapItem>
                        <Button
                          onClick={() => {
                            handleLinear("olive", "black");
                          }}
                          bgGradient={"linear(to-r,olive,black)"}
                        ></Button>
                      </WrapItem>
                      <WrapItem>
                        <Button
                          onClick={() => {
                            handleLinear("burlywood", "teal");
                          }}
                          bgGradient={"linear(to-r,burlywood,teal)"}
                        ></Button>
                      </WrapItem>
                      <WrapItem>
                        <Button
                          onClick={() => {
                            handleLinear("white", "pink");
                          }}
                          bgGradient={"linear(to-b,white,pink)"}
                        ></Button>
                      </WrapItem>
                      <WrapItem>
                        <Button
                          onClick={() => {
                            handleLinear("white", "purple");
                          }}
                          bgGradient={"linear(to-br,white,purple)"}
                        ></Button>
                      </WrapItem>
                      <WrapItem>
                        <Button
                          onClick={() => {
                            handleLinear("pink", "red");
                          }}
                          bgGradient={"linear(to-tr,pink,red)"}
                        ></Button>
                      </WrapItem>
                      <WrapItem>
                        <Button
                          onClick={() => {
                            handleLinear("blue", "pink");
                          }}
                          bgGradient={"linear(to-r,blue,pink)"}
                        ></Button>
                      </WrapItem>
                    </Wrap>
                  </Stack>
                </Box>
                <Box>
                  <Heading textAlign="left" size="xs" textTransform="uppercase">
                    Radial
                  </Heading>
                  <Stack direction="column">
                    <Wrap spacing={4}>
                      <WrapItem>
                        <Button
                          onClick={() => {
                            handleRadial("white", "red");
                          }}
                          bgGradient={"radial(white,red,white)"}
                        ></Button>
                      </WrapItem>
                      <WrapItem>
                        <Button
                          onClick={() => {
                            handleRadial("blue", "white");
                          }}
                          bgGradient={"radial(blue,white)"}
                        ></Button>
                      </WrapItem>
                      <WrapItem>
                        <Button
                          onClick={() => {
                            handleRadial("tan", "white");
                          }}
                          bgGradient={"radial(tan,white)"}
                        ></Button>
                      </WrapItem>
                      <WrapItem>
                        <Button
                          onClick={() => {
                            handleRadial("black", "white");
                          }}
                          bgGradient={"radial(black,white)"}
                        ></Button>
                      </WrapItem>
                      <WrapItem>
                        <Button
                          onClick={() => {
                            handleRadial("white", "gold");
                          }}
                          bgGradient={"radial(white,gold,white)"}
                        ></Button>
                      </WrapItem>
                      <WrapItem>
                        <Button
                          onClick={() => {
                            handleRadial("green", "white");
                          }}
                          bgGradient={"radial(green,white)"}
                        ></Button>
                      </WrapItem>
                      <WrapItem>
                        <Button
                          onClick={() => {
                            handleRadial("purple", "white");
                          }}
                          bgGradient={"radial(purple,white)"}
                        ></Button>
                      </WrapItem>
                      <WrapItem>
                        <Button
                          onClick={() => {
                            handleRadial("white", "cyan");
                          }}
                          bgGradient={"radial(white,cyan)"}
                        ></Button>
                      </WrapItem>
                      <WrapItem>
                        <Button
                          onClick={() => {
                            handleRadial("white", "pink");
                          }}
                          bgGradient={"radial(white,pink)"}
                        ></Button>
                      </WrapItem>
                      <WrapItem>
                        <Button
                          onClick={() => {
                            handleRadial("white", "orange");
                          }}
                          bgGradient={"radial(white,orange,white)"}
                        ></Button>
                      </WrapItem>
                    </Wrap>
                  </Stack>
                </Box>
                <Box>
                  <Heading textAlign="left" size="xs" textTransform="uppercase">
                    Foreground Color
                  </Heading>
                  <Stack direction="column">
                    <Wrap spacing={4}>
                      <WrapItem>
                        <Button
                          onClick={() => {
                            handleForeGround("black");
                          }}
                          bg="black"
                        ></Button>
                      </WrapItem>
                      <WrapItem>
                        <Button
                          onClick={() => {
                            handleForeGround("white");
                          }}
                          border="1px solid"
                          bg="white"
                        ></Button>
                      </WrapItem>
                    </Wrap>
                  </Stack>
                </Box>
              </Stack>
            </CardBody>
          </Card>

          <Card w="100%" style={bgStyle}>
            <Card border={"none"} minHeight="200px" w="100">
              <CardBody
                borderRadius={"20px"}
                objectFit={"contain"}
                backgroundSize={"cover"}
                backgroundRepeat={"no-repeat"}
                bgGradient={`url(https://img.freepik.com/premium-photo/beautiful-sunset-with-mountains-background-lake-with-glacier-water-foreground_955573-11.jpg)`}
              ></CardBody>
            </Card>

            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                <Box>
                  <Editable
                    textAlign={"left"}
                    defaultValue={name}
                    onSubmit={(value) => handleChange("name", value)}
                  >
                    <EditablePreview />
                    <EditableInput />
                  </Editable>
                  <Editable
                    textAlign={"left"}
                    defaultValue={designation}
                    onSubmit={(value) => handleChange("designation", value)}
                  >
                    <EditablePreview />
                    <EditableInput />
                  </Editable>
                  <Editable
                    textAlign={"left"}
                    defaultValue={location}
                    onSubmit={(value) => handleChange("location", value)}
                  >
                    <EditablePreview />
                    <EditableInput />
                  </Editable>
                  <Editable
                    textAlign={"left"}
                    defaultValue={skills}
                    onSubmit={(value) => handleChange("skills", value)}
                  >
                    <EditablePreview />
                    <EditableInput />
                  </Editable>
                  <Editable
                    textAlign={"left"}
                    defaultValue={projects}
                    onSubmit={(value) => handleChange("projects", value)}
                  >
                    <EditablePreview />
                    <EditableInput />
                  </Editable>
                </Box>
                <Box>
                  <Editable
                    borderRadius={"20px"}
                    boxSizing="border-box"
                    p="5"
                    border={"3px dashed"}
                    textAlign={"left"}
                    defaultValue={bio}
                    onSubmit={(value) => handleChange("bio", value)}
                  >
                    <EditablePreview />
                    <EditableInput />
                  </Editable>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </Flex>
      </Flex>
    </Box>
  );
};
