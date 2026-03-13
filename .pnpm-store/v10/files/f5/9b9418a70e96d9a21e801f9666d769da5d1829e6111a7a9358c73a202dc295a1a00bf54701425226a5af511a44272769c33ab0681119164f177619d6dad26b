import { o as __toDynamicImportESM } from "./chunk-CuftcezF.mjs";
import { n as colors, t as consola } from "./dist-0DfurPla.mjs";
import "./utils-D5jIbZ8_.mjs";
import { r as runMain$1, t as defineCommand } from "./dist-BBpbTs93.mjs";
import { a as p } from "./dist-DS-XJpoP.mjs";
import { n as name, r as version, t as description } from "./package-CnpCwgZx.mjs";
import { t as cwdArgs } from "./_shared-CThtxn2Y.mjs";
import { t as templates } from "./templates-DsEdV2ri.mjs";
import { n as logger, t as debug } from "./logger-O9Su9xI5.mjs";
import { t as runCommand } from "./run-C_Qia6Nn.mjs";
import { builtinModules, createRequire } from "node:module";
import nodeCrypto from "node:crypto";
import { resolve } from "node:path";
import process$1 from "node:process";
import assert from "node:assert";

//#region src/commands/index.ts
const _rDefault = (r$1) => r$1.default || r$1;
const commands = {
	add: () => import("./add-Dg3bksbK.mjs").then(_rDefault),
	analyze: () => import("./analyze-BjhcJ1k5.mjs").then(_rDefault),
	build: () => import("./build-GrLPgLPV.mjs").then(_rDefault),
	cleanup: () => import("./cleanup-BtHTRjlf.mjs").then(_rDefault),
	_dev: () => import("./dev-child-Dt6YmMhI.mjs").then(_rDefault),
	dev: () => import("./dev-D9Yfr9jn.mjs").then(_rDefault),
	devtools: () => import("./devtools-D_7RwOdU.mjs").then(_rDefault),
	generate: () => import("./generate-L58ufH1R.mjs").then(_rDefault),
	info: () => import("./info-DrcOKiYB.mjs").then(_rDefault),
	init: () => import("./init-IIq8gVFR.mjs").then(_rDefault),
	module: () => import("./module-BpaUBD5q.mjs").then(_rDefault),
	prepare: () => import("./prepare-DacboBDF.mjs").then(_rDefault),
	preview: () => import("./preview-Cd_Hy_P5.mjs").then(_rDefault),
	start: () => import("./preview-Cd_Hy_P5.mjs").then(_rDefault),
	test: () => import("./test-DBJGHky3.mjs").then(_rDefault),
	typecheck: () => import("./typecheck-Bm9n7xpO.mjs").then(_rDefault),
	upgrade: () => import("./upgrade-CuWS6zIn.mjs").then(_rDefault)
};

//#endregion
//#region ../../node_modules/.pnpm/@bomb.sh+tab@0.0.9_cac@6.7.14_citty@0.1.6/node_modules/@bomb.sh/tab/dist/t-HnUrbNwE.js
function t(e$1, t$1) {
	return `#compdef ${e$1}
compdef _${e$1} ${e$1}

# zsh completion for ${e$1} -*- shell-script -*-

__${e$1}_debug() {
    local file="$BASH_COMP_DEBUG_FILE"
    if [[ -n \${file} ]]; then
        echo "$*" >> "\${file}"
    fi
}

_${e$1}() {
    local shellCompDirectiveError=${a.ShellCompDirectiveError}
    local shellCompDirectiveNoSpace=${a.ShellCompDirectiveNoSpace}
    local shellCompDirectiveNoFileComp=${a.ShellCompDirectiveNoFileComp}
    local shellCompDirectiveFilterFileExt=${a.ShellCompDirectiveFilterFileExt}
    local shellCompDirectiveFilterDirs=${a.ShellCompDirectiveFilterDirs}
    local shellCompDirectiveKeepOrder=${a.ShellCompDirectiveKeepOrder}

    local lastParam lastChar flagPrefix requestComp out directive comp lastComp noSpace keepOrder
    local -a completions

    __${e$1}_debug "\\n========= starting completion logic =========="
    __${e$1}_debug "CURRENT: \${CURRENT}, words[*]: \${words[*]}"

    # The user could have moved the cursor backwards on the command-line.
    # We need to trigger completion from the $CURRENT location, so we need
    # to truncate the command-line ($words) up to the $CURRENT location.
    # (We cannot use $CURSOR as its value does not work when a command is an alias.)
    words=( "\${=words[1,CURRENT]}" )
    __${e$1}_debug "Truncated words[*]: \${words[*]},"

    lastParam=\${words[-1]}
    lastChar=\${lastParam[-1]}
    __${e$1}_debug "lastParam: \${lastParam}, lastChar: \${lastChar}"

    # For zsh, when completing a flag with an = (e.g., ${e$1} -n=<TAB>)
    # completions must be prefixed with the flag
    setopt local_options BASH_REMATCH
    if [[ "\${lastParam}" =~ '-.*=' ]]; then
        # We are dealing with a flag with an =
        flagPrefix="-P \${BASH_REMATCH}"
    fi

    # Prepare the command to obtain completions, ensuring arguments are quoted for eval
    local -a args_to_quote=("\${(@)words[2,-1]}")
    if [ "\${lastChar}" = "" ]; then
        # If the last parameter is complete (there is a space following it)
        # We add an extra empty parameter so we can indicate this to the go completion code.
        __${e$1}_debug "Adding extra empty parameter"
        args_to_quote+=("")
    fi

    # Use Zsh's (q) flag to quote each argument safely for eval
    local quoted_args=("\${(@q)args_to_quote}")

    # Join the main command and the quoted arguments into a single string for eval
    requestComp="${t$1} complete -- \${quoted_args[*]}"

    __${e$1}_debug "About to call: eval \${requestComp}"

    # Use eval to handle any environment variables and such
    out=$(eval \${requestComp} 2>/dev/null)
    __${e$1}_debug "completion output: \${out}"

    # Extract the directive integer following a : from the last line
    local lastLine
    while IFS='\n' read -r line; do
        lastLine=\${line}
    done < <(printf "%s\n" "\${out[@]}")
    __${e$1}_debug "last line: \${lastLine}"

    if [ "\${lastLine[1]}" = : ]; then
        directive=\${lastLine[2,-1]}
        # Remove the directive including the : and the newline
        local suffix
        (( suffix=\${#lastLine}+2))
        out=\${out[1,-$suffix]}
    else
        # There is no directive specified.  Leave $out as is.
        __${e$1}_debug "No directive found.  Setting to default"
        directive=0
    fi

    __${e$1}_debug "directive: \${directive}"
    __${e$1}_debug "completions: \${out}"
    __${e$1}_debug "flagPrefix: \${flagPrefix}"

    if [ $((directive & shellCompDirectiveError)) -ne 0 ]; then
        __${e$1}_debug "Completion received error. Ignoring completions."
        return
    fi

    local activeHelpMarker="%"
    local endIndex=\${#activeHelpMarker}
    local startIndex=$((\${#activeHelpMarker}+1))
    local hasActiveHelp=0
    while IFS='\n' read -r comp; do
        # Check if this is an activeHelp statement (i.e., prefixed with $activeHelpMarker)
        if [ "\${comp[1,$endIndex]}" = "$activeHelpMarker" ];then
            __${e$1}_debug "ActiveHelp found: $comp"
            comp="\${comp[$startIndex,-1]}"
            if [ -n "$comp" ]; then
                compadd -x "\${comp}"
                __${e$1}_debug "ActiveHelp will need delimiter"
                hasActiveHelp=1
            fi
            continue
        fi

        if [ -n "$comp" ]; then
            # If requested, completions are returned with a description.
            # The description is preceded by a TAB character.
            # For zsh's _describe, we need to use a : instead of a TAB.
            # We first need to escape any : as part of the completion itself.
            comp=\${comp//:/\\:}

            local tab="$(printf '\\t')"
            comp=\${comp//$tab/:}

            __${e$1}_debug "Adding completion: \${comp}"
            completions+=\${comp}
            lastComp=$comp
        fi
    done < <(printf "%s\n" "\${out[@]}")

    # Add a delimiter after the activeHelp statements, but only if:
    # - there are completions following the activeHelp statements, or
    # - file completion will be performed (so there will be choices after the activeHelp)
    if [ $hasActiveHelp -eq 1 ]; then
        if [ \${#completions} -ne 0 ] || [ $((directive & shellCompDirectiveNoFileComp)) -eq 0 ]; then
            __${e$1}_debug "Adding activeHelp delimiter"
            compadd -x "--"
            hasActiveHelp=0
        fi
    fi

    if [ $((directive & shellCompDirectiveNoSpace)) -ne 0 ]; then
        __${e$1}_debug "Activating nospace."
        noSpace="-S ''"
    fi

    if [ $((directive & shellCompDirectiveKeepOrder)) -ne 0 ]; then
        __${e$1}_debug "Activating keep order."
        keepOrder="-V"
    fi

    if [ $((directive & shellCompDirectiveFilterFileExt)) -ne 0 ]; then
        # File extension filtering
        local filteringCmd
        filteringCmd='_files'
        for filter in \${completions[@]}; do
            if [ \${filter[1]} != '*' ]; then
                # zsh requires a glob pattern to do file filtering
                filter="\\*.$filter"
            fi
            filteringCmd+=" -g $filter"
        done
        filteringCmd+=" \${flagPrefix}"

        __${e$1}_debug "File filtering command: $filteringCmd"
        _arguments '*:filename:'"$filteringCmd"
    elif [ $((directive & shellCompDirectiveFilterDirs)) -ne 0 ]; then
        # File completion for directories only
        local subdir
        subdir="\${completions[1]}"
        if [ -n "$subdir" ]; then
            __${e$1}_debug "Listing directories in $subdir"
            pushd "\${subdir}" >/dev/null 2>&1
        else
            __${e$1}_debug "Listing directories in ."
        fi

        local result
        _arguments '*:dirname:_files -/'" \${flagPrefix}"
        result=$?
        if [ -n "$subdir" ]; then
            popd >/dev/null 2>&1
        fi
        return $result
    else
        __${e$1}_debug "Calling _describe"
        if eval _describe $keepOrder "completions" completions -Q \${flagPrefix} \${noSpace}; then
            __${e$1}_debug "_describe found some completions"

            # Return the success of having called _describe
            return 0
        else
            __${e$1}_debug "_describe did not find completions."
            __${e$1}_debug "Checking if we should do file completion."
            if [ $((directive & shellCompDirectiveNoFileComp)) -ne 0 ]; then
                __${e$1}_debug "deactivating file completion"

                # Return 0 to indicate completion is finished and prevent zsh from
                # trying other completion algorithms (which could cause hanging).
                # We use NoFileComp directive to explicitly disable file completion.
                return 0
            else
                # Perform file completion
                __${e$1}_debug "Activating file completion"

                # We must return the result of this command, so it must be the
                # last command, or else we must store its result to return it.
                _arguments '*:filename:_files'" \${flagPrefix}"
            fi
        fi
    fi
}

# don't run the completion function when being sourced or eval-ed
if [ "\${funcstack[1]}" = "_${e$1}" ]; then
    _${e$1}
fi
`;
}
function n(e$1, t$1) {
	let n$1 = e$1.replace(/[-:]/g, `_`);
	return `# bash completion for ${e$1}

# Define shell completion directives
readonly ShellCompDirectiveError=${a.ShellCompDirectiveError}
readonly ShellCompDirectiveNoSpace=${a.ShellCompDirectiveNoSpace}
readonly ShellCompDirectiveNoFileComp=${a.ShellCompDirectiveNoFileComp}
readonly ShellCompDirectiveFilterFileExt=${a.ShellCompDirectiveFilterFileExt}
readonly ShellCompDirectiveFilterDirs=${a.ShellCompDirectiveFilterDirs}
readonly ShellCompDirectiveKeepOrder=${a.ShellCompDirectiveKeepOrder}

# Function to debug completion
__${n$1}_debug() {
    if [[ -n \${BASH_COMP_DEBUG_FILE:-} ]]; then
        echo "$*" >> "\${BASH_COMP_DEBUG_FILE}"
    fi
}

# Function to handle completions
__${n$1}_complete() {
    local cur prev words cword
    _get_comp_words_by_ref -n "=:" cur prev words cword

    local requestComp out directive
    
    # Build the command to get completions
    requestComp="${t$1} complete -- \${words[@]:1}"
    
    # Add an empty parameter if the last parameter is complete
    if [[ -z "$cur" ]]; then
        requestComp="$requestComp ''"
    fi
    
    # Get completions from the program
    out=$(eval "$requestComp" 2>/dev/null)
    
    # Extract directive if present
    directive=0
    if [[ "$out" == *:* ]]; then
        directive=\${out##*:}
        out=\${out%:*}
    fi
    
    # Process completions based on directive
    if [[ $((directive & $ShellCompDirectiveError)) -ne 0 ]]; then
        # Error, no completion
        return
    fi
    
    # Apply directives
    if [[ $((directive & $ShellCompDirectiveNoSpace)) -ne 0 ]]; then
        compopt -o nospace
    fi
    if [[ $((directive & $ShellCompDirectiveKeepOrder)) -ne 0 ]]; then
        compopt -o nosort
    fi
    if [[ $((directive & $ShellCompDirectiveNoFileComp)) -ne 0 ]]; then
        compopt +o default
    fi
    
    # Handle file extension filtering
    if [[ $((directive & $ShellCompDirectiveFilterFileExt)) -ne 0 ]]; then
        local filter=""
        for ext in $out; do
            filter="$filter|$ext"
        done
        filter="\\.($filter)"
        compopt -o filenames
        COMPREPLY=( $(compgen -f -X "!$filter" -- "$cur") )
        return
    fi
    
    # Handle directory filtering
    if [[ $((directive & $ShellCompDirectiveFilterDirs)) -ne 0 ]]; then
        compopt -o dirnames
        COMPREPLY=( $(compgen -d -- "$cur") )
        return
    fi
    
    # Process completions
    local IFS=$'\\n'
    local tab=$(printf '\\t')
    
    # Parse completions with descriptions
    local completions=()
    while read -r comp; do
        if [[ "$comp" == *$tab* ]]; then
            # Split completion and description
            local value=\${comp%%$tab*}
            local desc=\${comp#*$tab}
            completions+=("$value")
        else
            completions+=("$comp")
        fi
    done <<< "$out"
    
    # Return completions
    COMPREPLY=( $(compgen -W "\${completions[*]}" -- "$cur") )
}

# Register completion function
complete -F __${n$1}_complete ${e$1}
`;
}
function r(e$1, t$1) {
	let n$1 = e$1.replace(/[-:]/g, `_`);
	return `# fish completion for ${e$1} -*- shell-script -*-

# Define shell completion directives
set -l ShellCompDirectiveError ${a.ShellCompDirectiveError}
set -l ShellCompDirectiveNoSpace ${a.ShellCompDirectiveNoSpace}
set -l ShellCompDirectiveNoFileComp ${a.ShellCompDirectiveNoFileComp}
set -l ShellCompDirectiveFilterFileExt ${a.ShellCompDirectiveFilterFileExt}
set -l ShellCompDirectiveFilterDirs ${a.ShellCompDirectiveFilterDirs}
set -l ShellCompDirectiveKeepOrder ${a.ShellCompDirectiveKeepOrder}

function __${n$1}_debug
    set -l file "$BASH_COMP_DEBUG_FILE"
    if test -n "$file"
        echo "$argv" >> $file
    end
end

function __${n$1}_perform_completion
    __${n$1}_debug "Starting __${n$1}_perform_completion"

    # Extract all args except the completion flag
    set -l args (string match -v -- "--completion=" (commandline -opc))
    
    # Extract the current token being completed
    set -l current_token (commandline -ct)
    
    # Check if current token starts with a dash
    set -l flag_prefix ""
    if string match -q -- "-*" $current_token
        set flag_prefix "--flag="
    end
    
    __${n$1}_debug "Current token: $current_token"
    __${n$1}_debug "All args: $args"

    # Call the completion program and get the results
    set -l requestComp "${t$1} complete -- $args"
    __${n$1}_debug "Calling $requestComp"
    set -l results (eval $requestComp 2> /dev/null)
    
    # Some programs may output extra empty lines after the directive.
    # Let's ignore them or else it will break completion.
    # Ref: https://github.com/spf13/cobra/issues/1279
    for line in $results[-1..1]
        if test (string sub -s 1 -l 1 -- $line) = ":"
            # The directive
            set -l directive (string sub -s 2 -- $line)
            set -l directive_num (math $directive)
            break
        end
    end
    
    # No directive specified, use default
    if not set -q directive_num
        set directive_num 0
    end
    
    __${n$1}_debug "Directive: $directive_num"

    # Process completions based on directive
    if test $directive_num -eq $ShellCompDirectiveError
        # Error code. No completion.
        __${n$1}_debug "Received error directive: aborting."
        return 1
    end

    # Filter out the directive (last line)
    if test (count $results) -gt 0 -a (string sub -s 1 -l 1 -- $results[-1]) = ":"
        set results $results[1..-2]
    end

    # No completions, let fish handle file completions unless forbidden
    if test (count $results) -eq 0
        if test $directive_num -ne $ShellCompDirectiveNoFileComp
            __${n$1}_debug "No completions, performing file completion"
            return 1
        end
        __${n$1}_debug "No completions, but file completion forbidden"
        return 0
    end

    # Filter file extensions
    if test $directive_num -eq $ShellCompDirectiveFilterFileExt
        __${n$1}_debug "File extension filtering"
        set -l file_extensions
        for item in $results
            if test -n "$item" -a (string sub -s 1 -l 1 -- $item) != "-"
                set -a file_extensions "*$item"
            end
        end
        __${n$1}_debug "File extensions: $file_extensions"
        
        # Use the file extensions as completions
        set -l completions
        for ext in $file_extensions
            # Get all files matching the extension
            set -a completions (string replace -r '^.*/' '' -- $ext)
        end
        
        for item in $completions
            echo -e "$item\t"
        end
        return 0
    end

    # Filter directories
    if test $directive_num -eq $ShellCompDirectiveFilterDirs
        __${n$1}_debug "Directory filtering"
        set -l dirs
        for item in $results
            if test -d "$item"
                set -a dirs "$item/"
            end
        end
        
        for item in $dirs
            echo -e "$item\t"
        end
        return 0
    end

    # Process remaining completions
    for item in $results
        if test -n "$item"
            # Check if the item has a description
            if string match -q "*\t*" -- "$item"
                set -l completion_parts (string split \t -- "$item")
                set -l comp $completion_parts[1]
                set -l desc $completion_parts[2]
                
                # Add the completion and description
                echo -e "$comp\t$desc"
            else
                # Add just the completion
                echo -e "$item\t"
            end
        end
    end
    
    # If directive contains NoSpace, tell fish not to add a space after completion
    if test (math "$directive_num & $ShellCompDirectiveNoSpace") -ne 0
        return 2
    end
    
    return 0
end

# Set up the completion for the ${e$1} command
complete -c ${e$1} -f -a "(eval __${n$1}_perform_completion)"
`;
}
function i(e$1, t$1, n$1 = !1) {
	let r$1 = e$1.replace(/[-:]/g, `_`);
	return `# powershell completion for ${e$1} -*- shell-script -*-

  [Console]::OutputEncoding = [System.Text.Encoding]::UTF8
    function __${e$1}_debug {
        if ($env:BASH_COMP_DEBUG_FILE) {
            "$args" | Out-File -Append -FilePath "$env:BASH_COMP_DEBUG_FILE"
        }
    }

    filter __${e$1}_escapeStringWithSpecialChars {
        $_ -replace '\\s|#|@|\\$|;|,|''|\\{|\\}|\\(|\\)|"|\\||<|>|&','\`$&'
    }

[scriptblock]$__${r$1}CompleterBlock = {
    param(
            $WordToComplete,
            $CommandAst,
            $CursorPosition
        )

    # Get the current command line and convert into a string
    $Command = $CommandAst.CommandElements
    $Command = "$Command"

    __${e$1}_debug ""
    __${e$1}_debug "========= starting completion logic =========="
    __${e$1}_debug "WordToComplete: $WordToComplete Command: $Command CursorPosition: $CursorPosition"

    # The user could have moved the cursor backwards on the command-line.
    # We need to trigger completion from the $CursorPosition location, so we need
    # to truncate the command-line ($Command) up to the $CursorPosition location.
    # Make sure the $Command is longer then the $CursorPosition before we truncate.
    # This happens because the $Command does not include the last space.
    if ($Command.Length -gt $CursorPosition) {
        $Command = $Command.Substring(0, $CursorPosition)
    }
    __${e$1}_debug "Truncated command: $Command"

    $ShellCompDirectiveError=${a.ShellCompDirectiveError}
    $ShellCompDirectiveNoSpace=${a.ShellCompDirectiveNoSpace}
    $ShellCompDirectiveNoFileComp=${a.ShellCompDirectiveNoFileComp}
    $ShellCompDirectiveFilterFileExt=${a.ShellCompDirectiveFilterFileExt}
    $ShellCompDirectiveFilterDirs=${a.ShellCompDirectiveFilterDirs}
    $ShellCompDirectiveKeepOrder=${a.ShellCompDirectiveKeepOrder}

    # Prepare the command to request completions for the program.
    # Split the command at the first space to separate the program and arguments.
    $Program, $Arguments = $Command.Split(" ", 2)

    $RequestComp = "& ${t$1} complete -- $Arguments"
    __${e$1}_debug "RequestComp: $RequestComp"

    # we cannot use $WordToComplete because it
    # has the wrong values if the cursor was moved
    # so use the last argument
    if ($WordToComplete -ne "" ) {
        $WordToComplete = $Arguments.Split(" ")[-1]
    }
    __${e$1}_debug "New WordToComplete: $WordToComplete"


    # Check for flag with equal sign
    $IsEqualFlag = ($WordToComplete -Like "--*=*" )
    if ( $IsEqualFlag ) {
        __${e$1}_debug "Completing equal sign flag"
        # Remove the flag part
        $Flag, $WordToComplete = $WordToComplete.Split("=", 2)
    }

    if ( $WordToComplete -eq "" -And ( -Not $IsEqualFlag )) {
        # If the last parameter is complete (there is a space following it)
        # We add an extra empty parameter so we can indicate this to the go method.
        __${e$1}_debug "Adding extra empty parameter"
        # PowerShell 7.2+ changed the way how the arguments are passed to executables,
        # so for pre-7.2 or when Legacy argument passing is enabled we need to use
        if ($PSVersionTable.PsVersion -lt [version]'7.2.0' -or
            ($PSVersionTable.PsVersion -lt [version]'7.3.0' -and -not [ExperimentalFeature]::IsEnabled("PSNativeCommandArgumentPassing")) -or
            (($PSVersionTable.PsVersion -ge [version]'7.3.0' -or [ExperimentalFeature]::IsEnabled("PSNativeCommandArgumentPassing")) -and
              $PSNativeCommandArgumentPassing -eq 'Legacy')) {
             $RequestComp="$RequestComp" + ' \`"\`"'
        } else {
             $RequestComp = "$RequestComp" + ' ""'
        }
    }

    __${e$1}_debug "Calling $RequestComp"
    # First disable ActiveHelp which is not supported for Powershell
    $env:ActiveHelp = 0

    # call the command store the output in $out and redirect stderr and stdout to null
    # $Out is an array contains each line per element
    Invoke-Expression -OutVariable out "$RequestComp" 2>&1 | Out-Null

    # get directive from last line
    [int]$Directive = $Out[-1].TrimStart(':')
    if ($Directive -eq "") {
        # There is no directive specified
        $Directive = 0
    }
    __${e$1}_debug "The completion directive is: $Directive"

    # remove directive (last element) from out
    $Out = $Out | Where-Object { $_ -ne $Out[-1] }
    __${e$1}_debug "The completions are: $Out"

    if (($Directive -band $ShellCompDirectiveError) -ne 0 ) {
        # Error code.  No completion.
        __${e$1}_debug "Received error from custom completion go code"
        return
    }

    $Longest = 0
    [Array]$Values = $Out | ForEach-Object {
        # Split the output in name and description
        $Name, $Description = $_.Split("\`t", 2)
        __${e$1}_debug "Name: $Name Description: $Description"

        # Look for the longest completion so that we can format things nicely
        if ($Longest -lt $Name.Length) {
            $Longest = $Name.Length
        }

        # Set the description to a one space string if there is none set.
        # This is needed because the CompletionResult does not accept an empty string as argument
        if (-Not $Description) {
            $Description = " "
        }
        @{ Name = "$Name"; Description = "$Description" }
    }


    $Space = " "
    if (($Directive -band $ShellCompDirectiveNoSpace) -ne 0 ) {
        # remove the space here
        __${e$1}_debug "ShellCompDirectiveNoSpace is called"
        $Space = ""
    }

    if ((($Directive -band $ShellCompDirectiveFilterFileExt) -ne 0 ) -or
       (($Directive -band $ShellCompDirectiveFilterDirs) -ne 0 ))  {
        __${e$1}_debug "ShellCompDirectiveFilterFileExt ShellCompDirectiveFilterDirs are not supported"

        # return here to prevent the completion of the extensions
        return
    }

    $Values = $Values | Where-Object {
        # filter the result
        $_.Name -like "$WordToComplete*"

        # Join the flag back if we have an equal sign flag
        if ( $IsEqualFlag ) {
            __${e$1}_debug "Join the equal sign flag back to the completion value"
            $_.Name = $Flag + "=" + $_.Name
        }
    }

    # we sort the values in ascending order by name if keep order isn't passed
    if (($Directive -band $ShellCompDirectiveKeepOrder) -eq 0 ) {
        $Values = $Values | Sort-Object -Property Name
    }

    if (($Directive -band $ShellCompDirectiveNoFileComp) -ne 0 ) {
        __${e$1}_debug "ShellCompDirectiveNoFileComp is called"

        if ($Values.Length -eq 0) {
            # Just print an empty string here so the
            # shell does not start to complete paths.
            # We cannot use CompletionResult here because
            # it does not accept an empty string as argument.
            ""
            return
        }
    }

    # Get the current mode
    $Mode = (Get-PSReadLineKeyHandler | Where-Object { $_.Key -eq "Tab" }).Function
    __${e$1}_debug "Mode: $Mode"

    $Values | ForEach-Object {

        # store temporary because switch will overwrite $_
        $comp = $_

        # PowerShell supports three different completion modes
        # - TabCompleteNext (default windows style - on each key press the next option is displayed)
        # - Complete (works like bash)
        # - MenuComplete (works like zsh)
        # You set the mode with Set-PSReadLineKeyHandler -Key Tab -Function <mode>

        # CompletionResult Arguments:
        # 1) CompletionText text to be used as the auto completion result
        # 2) ListItemText   text to be displayed in the suggestion list
        # 3) ResultType     type of completion result
        # 4) ToolTip        text for the tooltip with details about the object

        switch ($Mode) {

            # bash like
            "Complete" {

                if ($Values.Length -eq 1) {
                    __${e$1}_debug "Only one completion left"

                    # insert space after value
                    [System.Management.Automation.CompletionResult]::new($($comp.Name | __${e$1}_escapeStringWithSpecialChars) + $Space, "$($comp.Name)", 'ParameterValue', "$($comp.Description)")

                } else {
                    # Add the proper number of spaces to align the descriptions
                    while($comp.Name.Length -lt $Longest) {
                        $comp.Name = $comp.Name + " "
                    }

                    # Check for empty description and only add parentheses if needed
                    if ($($comp.Description) -eq " " ) {
                        $Description = ""
                    } else {
                        $Description = "  ($($comp.Description))"
                    }

                    [System.Management.Automation.CompletionResult]::new("$($comp.Name)$Description", "$($comp.Name)$Description", 'ParameterValue', "$($comp.Description)")
                }
             }

            # zsh like
            "MenuComplete" {
                # insert space after value
                # MenuComplete will automatically show the ToolTip of
                # the highlighted value at the bottom of the suggestions.
                [System.Management.Automation.CompletionResult]::new($($comp.Name | __${e$1}_escapeStringWithSpecialChars) + $Space, "$($comp.Name)", 'ParameterValue', "$($comp.Description)")
            }

            # TabCompleteNext and in case we get something unknown
            Default {
                # Like MenuComplete but we don't want to add a space here because
                # the user need to press space anyway to get the completion.
                # Description will not be shown because that's not possible with TabCompleteNext
                [System.Management.Automation.CompletionResult]::new($($comp.Name | __${e$1}_escapeStringWithSpecialChars), "$($comp.Name)", 'ParameterValue', "$($comp.Description)")
            }
        }

    }
}

Register-ArgumentCompleter -CommandName '${e$1}' -ScriptBlock $__${r$1}CompleterBlock
`;
}
const a = {
	ShellCompDirectiveError: 1,
	ShellCompDirectiveNoSpace: 2,
	ShellCompDirectiveNoFileComp: 4,
	ShellCompDirectiveFilterFileExt: 8,
	ShellCompDirectiveFilterDirs: 16,
	ShellCompDirectiveKeepOrder: 32,
	shellCompDirectiveMaxValue: 64,
	ShellCompDirectiveDefault: 0
};
var o = class {
	name;
	variadic;
	command;
	handler;
	constructor(e$1, t$1, n$1, r$1 = !1) {
		this.command = e$1, this.name = t$1, this.handler = n$1, this.variadic = r$1;
	}
}, s$1 = class {
	value;
	description;
	command;
	handler;
	alias;
	isBoolean;
	constructor(e$1, t$1, n$1, r$1, i$1, a$1) {
		this.command = e$1, this.value = t$1, this.description = n$1, this.handler = r$1, this.alias = i$1, this.isBoolean = a$1;
	}
}, c$1 = class {
	value;
	description;
	options = /* @__PURE__ */ new Map();
	arguments = /* @__PURE__ */ new Map();
	parent;
	constructor(e$1, t$1) {
		this.value = e$1, this.description = t$1;
	}
	option(e$1, t$1, n$1, r$1) {
		let i$1, a$1, o$1;
		typeof n$1 == `function` ? (i$1 = n$1, a$1 = r$1, o$1 = !1) : typeof n$1 == `string` ? (i$1 = void 0, a$1 = n$1, o$1 = !0) : (i$1 = void 0, a$1 = void 0, o$1 = !0);
		let c$2 = new s$1(this, e$1, t$1, i$1, a$1, o$1);
		return this.options.set(e$1, c$2), this;
	}
	argument(e$1, t$1, n$1 = !1) {
		let r$1 = new o(this, e$1, t$1, n$1);
		return this.arguments.set(e$1, r$1), this;
	}
}, l$1 = class extends c$1 {
	commands = /* @__PURE__ */ new Map();
	completions = [];
	directive = a.ShellCompDirectiveDefault;
	constructor() {
		super(``, ``);
	}
	command(e$1, t$1) {
		let n$1 = new c$1(e$1, t$1);
		return this.commands.set(e$1, n$1), n$1;
	}
	stripOptions(e$1) {
		let t$1 = [], n$1 = 0;
		for (; n$1 < e$1.length;) {
			let r$1 = e$1[n$1];
			if (r$1.startsWith(`-`)) {
				n$1++;
				let t$2 = !1, i$1 = this.findOption(this, r$1);
				if (i$1) t$2 = i$1.isBoolean ?? !1;
				else for (let [, e$2] of this.commands) {
					let n$2 = this.findOption(e$2, r$1);
					if (n$2) {
						t$2 = n$2.isBoolean ?? !1;
						break;
					}
				}
				!t$2 && n$1 < e$1.length && !e$1[n$1].startsWith(`-`) && n$1++;
			} else t$1.push(r$1), n$1++;
		}
		return t$1;
	}
	matchCommand(e$1) {
		e$1 = this.stripOptions(e$1);
		let t$1 = [], n$1 = [], r$1 = null;
		for (let i$1 = 0; i$1 < e$1.length; i$1++) {
			let a$1 = e$1[i$1];
			t$1.push(a$1);
			let o$1 = this.commands.get(t$1.join(` `));
			if (o$1) r$1 = o$1;
			else {
				n$1 = e$1.slice(i$1, e$1.length);
				break;
			}
		}
		return [r$1 || this, n$1];
	}
	shouldCompleteFlags(e$1, t$1, n$1) {
		if (t$1.startsWith(`-`)) return !0;
		if (e$1?.startsWith(`-`)) {
			let t$2 = this.findOption(this, e$1);
			if (!t$2) {
				for (let [, n$2] of this.commands) if (t$2 = this.findOption(n$2, e$1), t$2) break;
			}
			return !(t$2 && t$2.isBoolean);
		}
		return !1;
	}
	shouldCompleteCommands(e$1, t$1) {
		return !e$1.startsWith(`-`);
	}
	handleFlagCompletion(e$1, t$1, n$1, r$1, i$1) {
		let a$1;
		if (n$1.includes(`=`)) {
			let [e$2] = n$1.split(`=`);
			a$1 = e$2;
		} else i$1?.startsWith(`-`) && (a$1 = i$1);
		if (a$1) {
			let t$2 = this.findOption(e$1, a$1);
			if (t$2?.handler) {
				let n$2 = [];
				t$2.handler.call(t$2, (e$2, t$3) => n$2.push({
					value: e$2,
					description: t$3
				}), e$1.options), this.completions = n$2;
			}
			return;
		}
		if (n$1.startsWith(`-`)) {
			let t$2 = n$1.startsWith(`-`) && !n$1.startsWith(`--`), r$2 = n$1.replace(/^-+/, ``);
			for (let [i$2, a$2] of e$1.options) t$2 && a$2.alias && `-${a$2.alias}`.startsWith(n$1) ? this.completions.push({
				value: `-${a$2.alias}`,
				description: a$2.description
			}) : !t$2 && i$2.startsWith(r$2) && this.completions.push({
				value: `--${i$2}`,
				description: a$2.description
			});
		}
	}
	findOption(e$1, t$1) {
		let n$1 = e$1.options.get(t$1);
		if (n$1 || (n$1 = e$1.options.get(t$1.replace(/^-+/, ``)), n$1)) return n$1;
		for (let [n$2, r$1] of e$1.options) if (r$1.alias && `-${r$1.alias}` === t$1) return r$1;
	}
	handleCommandCompletion(e$1, t$1) {
		let n$1 = this.stripOptions(e$1);
		for (let [e$2, r$1] of this.commands) {
			if (e$2 === ``) continue;
			let i$1 = e$2.split(` `);
			i$1.slice(0, n$1.length).every((e$3, t$2) => e$3 === n$1[t$2]) && i$1[n$1.length]?.startsWith(t$1) && this.completions.push({
				value: i$1[n$1.length],
				description: r$1.description
			});
		}
	}
	handlePositionalCompletion(e$1, t$1, n$1, r$1) {
		let i$1 = e$1.value.split(` `).length, a$1 = Math.max(0, t$1.length - i$1), o$1 = Array.from(e$1.arguments.entries());
		if (o$1.length > 0) {
			let t$2;
			if (a$1 < o$1.length) {
				let [e$2, n$2] = o$1[a$1];
				t$2 = n$2;
			} else {
				let e$2 = o$1[o$1.length - 1][1];
				e$2.variadic && (t$2 = e$2);
			}
			if (t$2 && t$2.handler && typeof t$2.handler == `function`) {
				let n$2 = [];
				t$2.handler.call(t$2, (e$2, t$3) => n$2.push({
					value: e$2,
					description: t$3
				}), e$1.options), this.completions.push(...n$2);
			}
		}
	}
	complete(e$1) {
		this.directive = a.ShellCompDirectiveNoFileComp;
		let t$1 = /* @__PURE__ */ new Set();
		this.completions.filter((e$2) => t$1.has(e$2.value) ? !1 : (t$1.add(e$2.value), !0)).filter((t$2) => {
			if (e$1.includes(`=`)) {
				let [, n$1] = e$1.split(`=`);
				return t$2.value.startsWith(n$1);
			}
			return t$2.value.startsWith(e$1);
		}).forEach((e$2) => console.log(`${e$2.value}\t${e$2.description ?? ``}`)), console.log(`:${this.directive}`);
	}
	parse(e$1) {
		this.completions = [];
		let t$1 = e$1[e$1.length - 1] === ``;
		t$1 && e$1.pop();
		let n$1 = e$1[e$1.length - 1] || ``, r$1 = e$1.slice(0, -1);
		t$1 && (n$1 !== `` && r$1.push(n$1), n$1 = ``);
		let [i$1] = this.matchCommand(r$1), a$1 = r$1[r$1.length - 1];
		if (this.shouldCompleteFlags(a$1, n$1, t$1)) this.handleFlagCompletion(i$1, r$1, n$1, t$1, a$1);
		else {
			if (a$1?.startsWith(`-`) && n$1 === `` && t$1) {
				let e$2 = this.findOption(this, a$1);
				if (!e$2) {
					for (let [, t$2] of this.commands) if (e$2 = this.findOption(t$2, a$1), e$2) break;
				}
				if (e$2 && e$2.isBoolean) {
					this.complete(n$1);
					return;
				}
			}
			this.shouldCompleteCommands(n$1, t$1) && this.handleCommandCompletion(r$1, n$1), i$1 && i$1.arguments.size > 0 && this.handlePositionalCompletion(i$1, r$1, n$1, t$1);
		}
		this.complete(n$1);
	}
	setup(a$1, o$1, s$2) {
		switch (assert(s$2 === `zsh` || s$2 === `bash` || s$2 === `fish` || s$2 === `powershell`, `Unsupported shell`), s$2) {
			case `zsh`: {
				let e$1 = t(a$1, o$1);
				console.log(e$1);
				break;
			}
			case `bash`: {
				let e$1 = n(a$1, o$1);
				console.log(e$1);
				break;
			}
			case `fish`: {
				let e$1 = r(a$1, o$1);
				console.log(e$1);
				break;
			}
			case `powershell`: {
				let e$1 = i(a$1, o$1);
				console.log(e$1);
				break;
			}
		}
	}
};
const u$1 = new l$1();
var f = u$1;

//#endregion
//#region ../../node_modules/.pnpm/@bomb.sh+tab@0.0.9_cac@6.7.14_citty@0.1.6/node_modules/@bomb.sh/tab/dist/shared-BE1U9MBi.js
function e(e$1 = `cli`) {
	if (process.argv.indexOf(`--`) === -1) {
		let t$1 = `Error: You need to use -- to separate completion arguments.\nExample: ${e$1} complete -- <args>`;
		console.error(t$1), process.exit(1);
	}
}

//#endregion
//#region ../../node_modules/.pnpm/@bomb.sh+tab@0.0.9_cac@6.7.14_citty@0.1.6/node_modules/@bomb.sh/tab/dist/citty.js
async function s(e$1) {
	let t$1 = [], n$1 = [];
	for (let [r$1, i$1] of Object.entries(e$1)) if (i$1.type === `positional`) {
		let e$2 = i$1;
		n$1.push({
			name: r$1,
			description: e$2.description,
			isOptional: !e$2.required,
			isVariadic: r$1.startsWith(`[...`) || r$1.startsWith(`<...`)
		});
	} else {
		let e$2 = {
			name: `--${r$1}`,
			description: i$1.description || ``,
			isRequired: i$1.required
		};
		`alias` in i$1 && i$1.alias && (Array.isArray(i$1.alias) ? i$1.alias : [i$1.alias]).forEach((n$2) => {
			t$1.push({
				...e$2,
				name: `-${n$2}`
			});
		}), t$1.push(e$2);
	}
	return {
		options: t$1,
		args: n$1
	};
}
async function c(e$1, t$1 = ``) {
	let n$1 = await Promise.resolve(e$1.meta), r$1 = await Promise.resolve(e$1.subCommands);
	if (!n$1 || !n$1.name) throw Error(`Command meta or name is missing`);
	let i$1 = {
		name: t$1 ? `${t$1} ${n$1.name}` : n$1.name,
		description: n$1.description || ``
	};
	if (e$1.args) {
		let { options: t$2, args: n$2 } = await s(await Promise.resolve(e$1.args));
		t$2.length > 0 && (i$1.options = t$2), n$2.length > 0 && (i$1.args = n$2);
	}
	return r$1 && (i$1.subcommands = await Promise.all(Object.entries(r$1).map(async ([e$2, t$2]) => c(await Promise.resolve(t$2), i$1.name)))), i$1;
}
async function l(e$1) {
	let t$1 = await c(e$1);
	return JSON.stringify(t$1, null, 2);
}
function u(e$1) {
	return e$1.includes(` `) ? `'${e$1}'` : e$1;
}
const d = process.execPath, f$1 = process.argv.slice(1), p$1 = u(d), m = f$1.map(u), h = `${p$1} ${process.execArgv.map(u).join(` `)} ${m[0]}`;
function g(e$1) {
	return e$1.args && Object.values(e$1.args).some((e$2) => e$2.type === `positional`);
}
async function _(e$1, t$1, n$1) {
	for (let [i$1, a$1] of Object.entries(e$1)) {
		let e$2 = await y(a$1), o$1 = await y(e$2.meta), s$2 = await y(e$2.subCommands), c$2 = n$1?.[i$1];
		if (!o$1 || typeof o$1?.description != `string`) throw Error(`Invalid meta or missing description.`);
		let l$2 = g(e$2), u$2 = t$1 ? `${t$1} ${i$1}` : i$1, d$1 = f.command(u$2, o$1.description);
		if (l$2 && e$2.args) for (let [t$2, n$2] of Object.entries(e$2.args)) {
			let e$3 = n$2;
			if (e$3.type === `positional`) {
				let n$3 = e$3.required === !1, r$1 = c$2?.args?.[t$2];
				r$1 ? d$1.argument(t$2, r$1, n$3) : d$1.argument(t$2, void 0, n$3);
			}
		}
		if (s$2 && await _(s$2, u$2, c$2?.subCommands), e$2.args) for (let [t$2, n$2] of Object.entries(e$2.args)) {
			let e$3 = n$2, r$1 = typeof e$3 == `object` && `alias` in e$3 ? Array.isArray(e$3.alias) ? e$3.alias[0] : e$3.alias : void 0, i$2 = c$2?.options?.[t$2];
			i$2 ? r$1 ? d$1.option(t$2, e$3.description ?? ``, i$2, r$1) : d$1.option(t$2, e$3.description ?? ``, i$2) : r$1 ? d$1.option(t$2, e$3.description ?? ``, r$1) : d$1.option(t$2, e$3.description ?? ``);
		}
	}
}
async function v(s$2, c$2) {
	let u$2 = await y(s$2.meta);
	if (!u$2) throw Error(`Invalid meta.`);
	let d$1 = u$2.name;
	if (!d$1) throw Error(`Invalid meta or missing name.`);
	let f$2 = await y(s$2.subCommands);
	if (g(s$2) && s$2.args) for (let [e$1, t$1] of Object.entries(s$2.args)) {
		let n$1 = t$1;
		if (n$1.type === `positional`) {
			let t$2 = n$1.required === !1, i$1 = c$2?.args?.[e$1];
			i$1 ? f.argument(e$1, i$1, t$2) : f.argument(e$1, void 0, t$2);
		}
	}
	if (f$2 && await _(f$2, void 0, c$2?.subCommands), s$2.args) for (let [e$1, t$1] of Object.entries(s$2.args)) {
		let n$1 = t$1, i$1 = typeof n$1 == `object` && `alias` in n$1 ? Array.isArray(n$1.alias) ? n$1.alias[0] : n$1.alias : void 0, a$1 = c$2?.options?.[e$1];
		a$1 ? i$1 ? f.option(e$1, n$1.description ?? ``, a$1, i$1) : f.option(e$1, n$1.description ?? ``, a$1) : i$1 ? f.option(e$1, n$1.description ?? ``, i$1) : f.option(e$1, n$1.description ?? ``);
	}
	let p$2 = defineCommand({
		meta: {
			name: `complete`,
			description: `Generate shell completion scripts`
		},
		args: { shell: {
			type: `positional`,
			description: `Shell type (zsh, bash, fish, powershell, fig)`,
			required: !1
		} },
		async run(o$1) {
			let c$3 = o$1.rawArgs[0];
			switch (c$3 === `--` && (c$3 = void 0), c$3) {
				case `zsh`: {
					let e$1 = t(d$1, h);
					console.log(e$1);
					break;
				}
				case `bash`: {
					let e$1 = n(d$1, h);
					console.log(e$1);
					break;
				}
				case `fish`: {
					let e$1 = r(d$1, h);
					console.log(e$1);
					break;
				}
				case `powershell`: {
					let t$1 = i(d$1, h);
					console.log(t$1);
					break;
				}
				case `fig`: {
					let e$1 = await l(s$2);
					console.log(e$1);
					break;
				}
				default: {
					e(d$1);
					let e$1 = o$1.rawArgs.slice(o$1.rawArgs.indexOf(`--`) + 1);
					return f.parse(e$1);
				}
			}
		}
	});
	return f$2 ? f$2.complete = p$2 : s$2.subCommands = { complete: p$2 }, f;
}
async function y(e$1) {
	return e$1 instanceof Function ? await e$1() : await e$1;
}

//#endregion
//#region src/data/nitro-presets.ts
const nitroPresets = [
	"alwaysdata",
	"aws-amplify",
	"aws-lambda",
	"azure-functions",
	"azure-swa",
	"bun",
	"cleavr",
	"cli",
	"cloudflare-dev",
	"cloudflare-durable",
	"cloudflare-module",
	"cloudflare-module-legacy",
	"cloudflare-pages",
	"cloudflare-pages-static",
	"cloudflare-worker",
	"deno-deploy",
	"deno-server",
	"deno-server-legacy",
	"digital-ocean",
	"edgio",
	"firebase",
	"firebase-app-hosting",
	"flight-control",
	"genezio",
	"github-pages",
	"gitlab-pages",
	"heroku",
	"iis-handler",
	"iis-node",
	"koyeb",
	"netlify",
	"netlify-builder",
	"netlify-edge",
	"netlify-legacy",
	"netlify-static",
	"node-cluster",
	"node-listener",
	"node-server",
	"platform-sh",
	"render-com",
	"service-worker",
	"static",
	"stormkit",
	"vercel",
	"vercel-edge",
	"vercel-static",
	"winterjs",
	"zeabur",
	"zeabur-static",
	"zerops",
	"zerops-static"
];

//#endregion
//#region src/completions.ts
async function initCompletions(command) {
	const completion = await v(command);
	const devCommand = completion.commands.get("dev");
	if (devCommand) {
		const portOption = devCommand.options.get("port");
		if (portOption) portOption.handler = (complete) => {
			complete("3000", "Default development port");
			complete("3001", "Alternative port");
			complete("8080", "Common alternative port");
		};
		const hostOption = devCommand.options.get("host");
		if (hostOption) hostOption.handler = (complete) => {
			complete("localhost", "Local development");
			complete("0.0.0.0", "Listen on all interfaces");
			complete("127.0.0.1", "Loopback address");
		};
	}
	const buildCommand = completion.commands.get("build");
	if (buildCommand) {
		const presetOption = buildCommand.options.get("preset");
		if (presetOption) presetOption.handler = (complete) => {
			for (const preset of nitroPresets) complete(preset, "");
		};
	}
	const initCommand = completion.commands.get("init");
	if (initCommand) {
		const templateOption = initCommand.options.get("template");
		if (templateOption) templateOption.handler = (complete) => {
			for (const template in templates) complete(template, templates[template]?.description || "");
		};
	}
	const addCommand = completion.commands.get("add");
	if (addCommand) {
		const cwdOption = addCommand.options.get("cwd");
		if (cwdOption) cwdOption.handler = (complete) => {
			complete(".", "Current directory");
		};
	}
	for (const cmdName of [
		"dev",
		"build",
		"generate",
		"preview",
		"prepare",
		"init"
	]) {
		const cmd = completion.commands.get(cmdName);
		if (cmd) {
			const logLevelOption = cmd.options.get("logLevel");
			if (logLevelOption) logLevelOption.handler = (complete) => {
				complete("silent", "No logs");
				complete("info", "Standard logging");
				complete("verbose", "Detailed logging");
			};
		}
	}
	return completion;
}

//#endregion
//#region src/utils/console.ts
function wrapReporter(reporter) {
	return { log(logObj, ctx) {
		if (!logObj.args || !logObj.args.length) return;
		const msg = logObj.args[0];
		if (typeof msg === "string" && !process$1.env.DEBUG) {
			if (msg.startsWith("[Vue Router warn]: No match found for location with path")) return;
			if (msg.includes("ExperimentalWarning: The Fetch API is an experimental feature")) return;
			if (msg.startsWith("Sourcemap") && msg.includes("node_modules")) return;
		}
		return reporter.log(logObj, ctx);
	} };
}
function setupGlobalConsole(opts = {}) {
	consola.options.reporters = consola.options.reporters.map(wrapReporter);
	if (opts.dev) consola.wrapAll();
	else consola.wrapConsole();
	process$1.on("unhandledRejection", (err) => consola.error("[unhandledRejection]", err));
	process$1.on("uncaughtException", (err) => consola.error("[uncaughtException]", err));
}

//#endregion
//#region src/utils/engines.ts
async function checkEngines() {
	const satisfies = await import("./satisfies-C95l2Kr2.mjs").then(__toDynamicImportESM(1)).then((r$1) => r$1.default || r$1);
	const currentNode = process$1.versions.node;
	const nodeRange = ">= 18.0.0";
	if (!satisfies(currentNode, nodeRange)) logger.warn(`Current version of Node.js (${colors.cyan(currentNode)}) is unsupported and might cause issues.\n       Please upgrade to a compatible version ${colors.cyan(nodeRange)}.`);
}

//#endregion
//#region src/main.ts
if (!globalThis.crypto) globalThis.crypto = nodeCrypto.webcrypto;
if (!process$1.getBuiltinModule) {
	const _require = createRequire(import.meta.url);
	process$1.getBuiltinModule = (name$1) => {
		if (name$1.startsWith("node:") || builtinModules.includes(name$1)) return _require.resolve(name$1);
	};
}
const _main = defineCommand({
	meta: {
		name: name.endsWith("nightly") ? name : "nuxi",
		version,
		description
	},
	args: {
		...cwdArgs,
		command: {
			type: "positional",
			required: false
		}
	},
	subCommands: commands,
	async setup(ctx) {
		const command = ctx.args._[0];
		setupGlobalConsole({ dev: command === "dev" });
		debug(`Running \`nuxt ${command}\` command`);
		let backgroundTasks;
		if (command !== "_dev" && p !== "stackblitz") backgroundTasks = Promise.all([checkEngines()]).catch((err) => logger.error(err));
		if (command === "init") await backgroundTasks;
		if (ctx.args.command && !(ctx.args.command in commands)) {
			const cwd$1 = resolve(ctx.args.cwd);
			try {
				const { x } = await import("./main-C_SUeFVh.mjs");
				await x(`nuxt-${ctx.args.command}`, ctx.rawArgs.slice(1), {
					nodeOptions: {
						stdio: "inherit",
						cwd: cwd$1
					},
					throwOnError: true
				});
			} catch (err) {
				if (err instanceof Error && "code" in err && err.code === "ENOENT") return;
			}
			process$1.exit();
		}
	}
});
const main = _main;
async function runMain() {
	await initCompletions(main);
	return runMain$1(main);
}

//#endregion
export { main, runCommand, runMain };