import { createHomeStyles } from "@/assets/styles/home.styles";
import EmptyState from "@/components/EmptyState";
import Header from "@/components/Header";
import LoadingSpinner from "@/components/LoadingSpinner";
import TodoInput from "@/components/TodoInput";
import { api } from "@/convex/_generated/api";
import { Doc, Id } from "@/convex/_generated/dataModel";
import { useTheme } from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useMutation, useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Alert, FlatList, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
type Todo = Doc<"todos">

export default function Index() {
  const {  colors } = useTheme();

  const [editingId, setEditingId] = useState<Id<"todos"> | null>(null);
  const [editText, setEditText] = useState("");
  
  const Homestyles = createHomeStyles(colors);

  const todos = useQuery(api.todos.getTodos);
  const toggleTodo = useMutation(api.todos.toggleTodo);
  const deleteTodo = useMutation(api.todos.deleteTodo);
  const updateTodo = useMutation(api.todos.updateTodo);
  const isLoading = todos === undefined;

  if(isLoading) return <LoadingSpinner/>

  const handleToggleTodo = async (id:Id<"todos">) => {
    try {
      await toggleTodo({id})
    } catch (error) {
      console.log("Error: ", error);
      Alert.alert("Error", "Failed to toggle todo")
      
    }
  }
  const hanndleDeleteTodo = async (id: Id<"todos">) =>{
    Alert.alert("Delete Todo", "Are you sure you want to delete this todo?", [
      {text:"Cancel", style: "cancel"},
      {text:"Delete", style: "destructive", onPress: ()=> deleteTodo({id})},
    ])
  }

  const handleEditTodo = (todo:Todo) => {
    setEditText(todo.text)
    setEditingId(todo._id)
  }
  const handleSaveTodo = async ()  => {
    if(editingId){
      try {
        await updateTodo({id:editingId, text:editText.trim()})
        setEditingId(null)
        setEditText("")
        
      } catch (error) {
        console.log("Error: ",error);
        Alert.alert("Error", "Failed to update todo");
        
      }
    }
  }
  const handleCancelEdit = () => {
    setEditingId(null)
    setEditText("")
  }

  const renderTodoItem = ({item}: {item:Todo}) =>{

    const isEditing = editingId === item._id;

    return (
      <View style={Homestyles.todoItemWrapper} >
        <LinearGradient 
          colors={colors.gradients.surface}
          style={Homestyles.todoItem}
          start={{x:0, y:0}}
          end={{x:1, y:1}}
        >
          <TouchableOpacity
            style={Homestyles.checkbox}
            activeOpacity={0.7}
            onPress={()=> handleToggleTodo(item._id)}
          >
            <LinearGradient
              colors={item.isComplete ? colors.gradients.success : colors.gradients.muted}
              style={[
                Homestyles.checkboxInner, {borderColor:item.isComplete ? "transparent" : colors.border}
              ]}
            >
              {item.isComplete && <Ionicons name="checkmark" size={18} color="#fff"/>}
            </LinearGradient>

          </TouchableOpacity>
          
          {isEditing ? (
            <View style={Homestyles.editContainer}>
              <TextInput
                style={Homestyles.editInput}
                value={editText}
                onChangeText={setEditText}
                autoFocus
                multiline
                placeholder="Edit your todo..."
                placeholderTextColor={colors.textMuted}
              />
              <View style={Homestyles.editButtons}>
                <TouchableOpacity onPress={handleSaveTodo} activeOpacity={0.8} >
                  <LinearGradient colors={colors.gradients.success} style={Homestyles.editButton} >
                    <Ionicons name="checkmark" size={16} color="#fff"/>
                    <Text style={Homestyles.editButtonText}>Save</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleCancelEdit} activeOpacity={0.8} >
                  <LinearGradient colors={colors.gradients.muted} style={Homestyles.editButton} >
                    <Ionicons name="close" size={16} color="#fff"/>
                    <Text style={Homestyles.editButtonText}>Cancel</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View style={Homestyles.todoTextContainer}>
            <Text
              style={[
                Homestyles.todoText,
                item.isComplete && {
                  textDecorationLine:"line-through",
                  color:colors.textMuted,
                  opacity:0.6
                }
              ]}
            >
              {item.text}
            </Text>


            <View style={Homestyles.todoActions}>
              <TouchableOpacity onPress={()=>handleEditTodo(item)} activeOpacity={0.8}>
                <LinearGradient colors={colors.gradients.warning} style={Homestyles.actionButton}>
                  <Ionicons name="pencil" size={14} color="#fff"/>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>hanndleDeleteTodo(item._id)} activeOpacity={0.8}>
                <LinearGradient colors={colors.gradients.danger} style={Homestyles.actionButton}>
                  <Ionicons name="trash" size={14} color="#fff"/>
                </LinearGradient>
              </TouchableOpacity>
            </View>

          </View>
          )}

        </LinearGradient>
      </View>
    )
  }

  return (
    <LinearGradient colors={colors.gradients.background} style={Homestyles.container}>
      <StatusBar barStyle={colors.statusBarStyle} />
        <SafeAreaView style={Homestyles.safeArea}>
          <Header />
          <TodoInput/>
          
          <FlatList
            data={todos}
            renderItem={renderTodoItem}
            keyExtractor={(item)=>item._id}
            style={Homestyles.todoList}
            contentContainerStyle={Homestyles.todoListContent}
            ListEmptyComponent={<EmptyState/>}
            showsVerticalScrollIndicator={false}
          />
        </SafeAreaView>
    </LinearGradient>
  );
}