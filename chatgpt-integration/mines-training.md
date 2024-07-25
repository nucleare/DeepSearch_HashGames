# Conceptualization of AI Usage
Generally speaking, AI can be set up to complete repeatitive, mundane tasks while generative AI is able to learn from a set of data. Below are merely a gathering of ideas and concepts for the implementation of either types of AI.

## Formulation of Patterns in Mines
Set of parameters for consideration in developping an AI designed to find patterns in the game result outcomes of mines. Preliminary requirements call for generating game results and producing those results in text form while making it easy to determine what the visual layout would be. This helps define the parameters that are based on the visual pattern created by the game results.

### Row\/Column Correlation Search Set
For a set of changing server seeds, same client seed and same nonce sets...
 - Find all nonces that include a game result containing at least one full column or one full row of gems
 - - For labelling, identify each nonce with the corresponding game result of a full column with either Column 1, 2, ... 4, 5 from left to right
   - For labelling, identify each nonce with the corresponding game result of a full row with either Row A, B, ... D, E from top to bottom
   - Within each server seed, group each nonce with other nonces that have game results containing the same row or column and categorize by the corresponding Column number or Row letter; note the distance in the number of nonces between each nonce sharing the same full column/row outcome and store those values.
   - Compare the stored values for the Full Row/Column Nonce values with other seeds to find and group nonce pairs that shair the same distance between those nonces containing a full row or column, regardless of what row or column. The goal is to find game nonces that are equally spaced apart when a full row or column appeared in the game results between different seeds. Store the values of those nonces.
   - Across all server seeds, group all nonces having the same full row or full column in their game result; note server seeds and categorize by row letter or column number
  

To be continued...
