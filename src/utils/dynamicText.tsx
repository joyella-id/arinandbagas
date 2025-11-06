"use client";
import {
  ReactNode,
  useEffect,
  Fragment,
  createContext,
  useContext,
} from "react";
import { Text } from "@/Components/Shared/Text/Text";
import { Button } from "@/Components/Shared/Button/Button";
// import { ChangeTextModal } from "@/Components/Shared/ChangeTextModal/ChangeTextModal";
import TextEditor from "@/Components/Shared/TextEditor/TextEditor";
import { useModal } from "@/Components/Shared/Modal/Modal";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { IconProps, LoveIcon } from "@/assets/icons";

/*
  Dynamic Text Object Example:
  
  -- Text with single children
      {
        HalamanPembuka: {
          weddingDate: {
            element: "Text",
            props: { block: false, dynamic: true },
            children: {
              props: { color: "white", letterSpacing: 4, fontSize: 11 },
              element: "Text",
              children: "24 . 02 . 2024",
            },
          },
        },
      }

  -- Text with multiple children
      {
        HalamanPembuka: {
          theWeddingOf: {
            element: "Text",
            props: { block: false, dynamic: true },
            children: [
              {
                props: { color: "white", block: false },
                element: "Text",
                children: "The",
              },
              {
                props: {
                  color: "white",
                  block: false,
                  fontWeight: "500",
                  fontStyle: "italic",
                },
                element: "Text",
                children: " Wedding of",
              },
            ],
          },
        },
      }

  -- Non-text elements
      {
        HalamanPembuka: {
          openButton: {
            element: "Button",
            props: { id: "openButton" },
            children: {
              element: "Text",
              props: {
                block: false,
                dynamic: true,
                style: { display: "flex", alignItems: "center" },
              },
              children: [
                {
                  props: { color: "white", size: 16 },
                  element: "Icon",
                  children: "LoveIcon",
                },
                {
                  props: {
                    block: false,
                    color: "white",
                    fontSize: 12,
                    letterSpacing: 2,
                  },
                  element: "Text",
                  children: "Buka Undangan",
                },
              ],
            },
          },
        },
      }
*/

type FullTextDataType = Record<string, Record<string, ElementJSONType>>;

export type ElementJSONType = {
  props: Record<string, any>;
  element: "Text" | "Button" | "Icon";
  children: string | ElementJSONType | ElementJSONType[];
  id?: string;
};

// export const useEnableEditDynamicText = (clientRendered: boolean) => {
//   const { renderModal, onClose } = useModal();
//   const searchParams = useSearchParams();
//   const isDevelopment = !!searchParams.get("development");
//   useEffect(() => {
//     if (isDevelopment && clientRendered) {
//       const dynamicElements = document.querySelectorAll("[data-dynamic=true]");

//       if (dynamicElements.length > 0) {
//         dynamicElements.forEach((el) => {
//           const pageKey = el.getAttribute("data-dynamic-pagekey");
//           const elementKey = el.getAttribute("data-dynamic-elementkey");

//           if (pageKey && elementKey) {
//             (el as HTMLElement).style.cursor = "pointer";
//             el.addEventListener("click", () => {
//               const modalId = `change-text-${pageKey}-${elementKey}`;
//               renderModal(
//                 <ChangeTextModal
//                   pageKey={pageKey}
//                   elementKey={elementKey}
//                   onClose={() => {
//                     onClose(modalId);
//                   }}
//                 />,
//                 modalId
//               );
//             });
//           }
//         });
//       }
//     }
//   }, [clientRendered]);
// };

// export const DynamicTextDataContext = createContext<{
//   textData: FullTextDataType;
// }>({ textData: {} });

// export const DynamicTextDataProvider = ({
//   children,
// }: {
//   children: ReactNode;
// }) => {
//   const searchParams = useSearchParams();
//   const textData = searchParams.get("textdata") || "";
//   const textDataDecoded = atob(textData);
//   // const parsedTextData = JSON.parse(textDataDecoded);
//   const parsedTextData: FullTextDataType = {
//     HalamanPembuka: {
//       recipient: {
//         props: {
//           block: false,
//           dynamic: true,
//         },
//         element: "Text",
//         children: {
//           props: {
//             color: "white",
//           },
//           element: "Text",
//           children: "Kepada Yth.",
//         },
//       },
//       openButton: {
//         props: {
//           id: "openButton",
//         },
//         element: "Button",
//         children: {
//           props: {
//             block: false,
//             style: {
//               display: "flex",
//               alignItems: "center",
//             },
//             dynamic: true,
//           },
//           element: "Text",
//           children: [
//             {
//               props: {
//                 size: 16,
//                 color: "white",
//               },
//               element: "Icon",
//               children: "LoveIcon",
//             },
//             {
//               props: {
//                 block: false,
//                 color: "white",
//                 fontSize: 12,
//                 letterSpacing: 2,
//               },
//               element: "Text",
//               children: "Buka Undangan",
//             },
//           ],
//         },
//       },
//       weddingDate: {
//         props: {
//           block: false,
//           dynamic: true,
//         },
//         element: "Text",
//         children: {
//           props: {
//             color: "white",
//             fontSize: 11,
//             letterSpacing: 4,
//           },
//           element: "Text",
//           children: "24 . 02 . 2024",
//         },
//       },
//       arinDanBagas: {
//         props: {
//           block: false,
//           dynamic: true,
//         },
//         element: "Text",
//         children: [
//           {
//             props: {
//               id: "name1",
//               font: "diamondBridge",
//               block: false,
//               color: "white",
//               fontSize: 32,
//             },
//             element: "Text",
//             children: "ARIN",
//           },
//           {
//             props: {
//               font: "diamondBridge",
//               block: false,
//               color: "white",
//               fontSize: 64,
//             },
//             element: "Text",
//             children: " & ",
//           },
//           {
//             props: {
//               id: "name2",
//               font: "diamondBridge",
//               block: false,
//               color: "white",
//               fontSize: 32,
//             },
//             element: "Text",
//             children: "BAGAS",
//           },
//         ],
//       },
//       theWeddingOf: {
//         props: {
//           block: false,
//           dynamic: true,
//         },
//         element: "Text",
//         children: [
//           {
//             props: {
//               block: false,
//               color: "white",
//             },
//             element: "Text",
//             children: "The",
//           },
//           {
//             props: {
//               block: false,
//               color: "white",
//               fontStyle: "italic",
//               fontWeight: "500",
//             },
//             element: "Text",
//             children: " Wedding of",
//           },
//         ],
//       },
//       recipientName: {
//         props: {
//           block: false,
//           dynamic: true,
//         },
//         element: "Text",
//         children: {
//           props: {
//             font: "trochut",
//             color: "white",
//             fontSize: 32,
//           },
//           element: "Text",
//           children: "ARIN & BAGAS",
//         },
//       },
//     },
//   };
//   return (
//     <DynamicTextDataContext.Provider value={{ textData: parsedTextData }}>
//       {children}
//     </DynamicTextDataContext.Provider>
//   );
// };

// const ElementMap = {
//   Text: Text,
//   Button: Button,
//   Icon: (children: string) => {
//     if (children === "LoveIcon") {
//       return LoveIcon;
//     }
//   },
// };

// export const convertJSONToElement = (
//   element: ElementJSONType | ElementJSONType[] | null,
//   pageKey?: string,
//   elementKey?: string,
//   extraProps?: Record<
//     string,
//     Record<
//       string,
//       string | number | boolean | null | undefined | ((param: any) => any)
//     >
//   >
// ): ReactNode => {
//   if (element) {
//     if (!Array.isArray(element)) {
//       const elementId = element?.props?.id
//         ? `${element?.props?.id}`
//         : undefined;
//       const currentExtraProps =
//         elementId && extraProps ? extraProps?.[elementId] : {};
//       const children = element?.children;
//       const elementName = element?.element;
//       if (elementName === "Icon") {
//         const elementChildren = element?.children as string;
//         const ElementToRender = ElementMap.Icon(elementChildren);
//         if (ElementToRender) {
//           return (
//             <ElementToRender
//               {...currentExtraProps}
//               {...(element.props as IconProps)}
//             />
//           );
//         }
//       } else {
//         if (typeof children === "string") {
//           const ElementToRender = ElementMap[elementName];
//           return (
//             <ElementToRender
//               id={elementId}
//               {...currentExtraProps}
//               {...element?.props}
//             >
//               {children}
//             </ElementToRender>
//           );
//         } else {
//           const ElementToRender = ElementMap[elementName];
//           const TextDynamicProps =
//             elementName === "Text" && element?.props?.dynamic
//               ? {
//                   dynamic: true,
//                   ["data-dynamic-pagekey"]: pageKey,
//                   ["data-dynamic-elementkey"]: elementKey,
//                 }
//               : {};
//           return (
//             <ElementToRender
//               id={elementId}
//               {...currentExtraProps}
//               {...element?.props}
//               {...TextDynamicProps}
//             >
//               {convertJSONToElement(children, pageKey, elementKey, extraProps)}
//             </ElementToRender>
//           );
//         }
//       }
//     } else {
//       return (
//         <>
//           {element.map((item, i) => (
//             <Fragment key={`${i}-${JSON.stringify(item)}`}>
//               {convertJSONToElement(item, pageKey, elementKey, extraProps)}
//             </Fragment>
//           ))}
//         </>
//       );
//     }
//   } else {
//     return <></>;
//   }
// };

// export const convertJSONToURLParam = (jsonValue: FullTextDataType) => {
//   return btoa(JSON.stringify(jsonValue));
// };

// export const useDynamicTextData = (param?: { pageKey?: string }) => {
//   const pageKey = param?.pageKey;
//   const currentSearchParam = useSearchParams();
//   const router = useRouter();
//   const { textData } = useContext(DynamicTextDataContext);
//   const currentPageTextData = pageKey ? textData[pageKey] : {};
//   const convertFunction = (
//     elementKey: string,
//     extraProps?: Record<
//       string,
//       Record<
//         string,
//         string | number | boolean | null | undefined | ((param: any) => any)
//       >
//     >
//   ): ReactNode => {
//     return convertJSONToElement(
//       currentPageTextData[elementKey],
//       pageKey || "",
//       elementKey,
//       extraProps
//     );
//   };

//   const pushJSONToURLParam = (jsonValue: FullTextDataType) => {
//     const newTextDataSearchParam = convertJSONToURLParam(jsonValue);
//     const newSearchParams = new URLSearchParams(currentSearchParam);
//     newSearchParams.set("textdata", newTextDataSearchParam);
//     router.push(`?${newSearchParams.toString()}`);
//   };
//   return {
//     currentPageTextData: pageKey ? currentPageTextData : {},
//     allPageData: textData,
//     convertFunction,
//     convertJSONToURLParam,
//     pushJSONToURLParam,
//   };
// };
